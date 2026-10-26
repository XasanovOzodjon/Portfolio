import json
import requests
from django.conf import settings
from django.http import JsonResponse, HttpResponse, HttpRequest
from django.shortcuts import render, redirect
from django.utils import translation
from django.views.decorators.csrf import csrf_exempt

from .models import (
    User,
    Skill,
    Project,
    MiniProject,
    KeyAchievement,
    Experience,
    ImpactAndAchievementsGlobal,
    ImpactAndAchievements,
    MaAItem,
    ContactMessage,
    Service,
    Button,
    OriginFoundation,
    ExperienceChapter
)


def send_telegram_message(name, email, message, source="ECHO Portfolio v2"):
    """Send a contact message to Telegram bot if credentials are configured."""
    token = getattr(settings, 'TOKEN', None)
    chat_id = getattr(settings, 'CHAT_ID', None)
    
    if not token or not chat_id:
        return True, "Xabar qabul qilindi (Telegram bot token sozlanmagan)."

    telegram_text = (
        f"🚀 *{source}* orqali yangi xabar!\n\n"
        f"👤 *Ism:* {name}\n"
        f"📧 *Email:* {email}\n"
        f"💬 *Xabar:*\n{message}"
    )
    url = f"https://api.telegram.org/bot{token}/sendMessage"
    payload = {
        "chat_id": chat_id,
        "text": telegram_text,
        "parse_mode": "Markdown"
    }

    try:
        response = requests.post(url, data=payload, timeout=8)
        if response.status_code == 200:
            return True, "Xabaringiz muvaffaqiyatli yuborildi! ✅"
        return False, f"Telegram API xatosi ({response.status_code})"
    except Exception as e:
        return False, f"Xabar yuborishda xatolik: {e}"


def get_portfolio_context():
    """Retrieve all structured portfolio data for template & API."""
    user = User.objects.first()
    skills = list(user.skills.all()) if user and user.skills.exists() else list(Skill.objects.all())
    projects = list(Project.objects.all())
    experiences = list(Experience.objects.all())
    impact_data = list(ImpactAndAchievementsGlobal.objects.all())
    services = list(Service.objects.filter(is_active=True))
    buttons = list(Button.objects.filter(is_active=True))
    origin = OriginFoundation.objects.first()
    exp_chapters = list(ExperienceChapter.objects.all().order_by('order'))
    chapter_learning = exp_chapters[0] if len(exp_chapters) > 0 else None
    chapter_freelance = exp_chapters[1] if len(exp_chapters) > 1 else None
    about_skills = list(Skill.objects.filter(is_featured_in_about=True))
    mini_projects = list(MiniProject.objects.filter(is_active=True))
    if not about_skills and skills:
        about_skills = skills[:4]

    btn_dict = {b.title.strip().upper(): b.link for b in buttons}
    social_links = {
        'telegram': btn_dict.get('TELEGRAM', 'https://t.me/khasanoff'),
        'github': btn_dict.get('GITHUB', 'https://github.com/XasanovOzodjon'),
        'linkedin': btn_dict.get('LINKEDIN', 'https://linkedin.com/'),
        'instagram': btn_dict.get('INSTAGRAM', 'https://instagram.com/'),
    }

    # Build WorksWheel data from separate MiniProject model (Mini Projects)
    works_list = []
    for mp in mini_projects:
        skill_names = [s.name for s in mp.skills.all()]
        delivs = [d.strip() for d in mp.deliverables.split("•")] if mp.deliverables else ["Interactive UI", "Micro-Animations"]
        works_list.append({
            "title": mp.title,
            "subtitle": mp.subtitle or "Interactive Micro-Experience",
            "description": mp.description,
            "image": mp.image or "Landing Page Assest/Screenshot 2026-10-20 at 7.46.25 PM.png",
            "src": mp.image or "Landing Page Assest/Screenshot 2026-10-20 at 7.46.25 PM.png",
            "href": mp.link or f"#{mp.id}",
            "link": mp.link or "",
            "github_link": mp.github_link or "",
            "is_github_private": bool(mp.is_github_private),
            "stats": mp.stats or "WebGL • Micro-Experience",
            "tools": skill_names if skill_names else ["JavaScript", "WebGL", "CSS3"],
            "deliverables": delivs
        })

    # Build FlexCarousel data from Project model (Featured Projects)
    items_list = []
    for p in projects:
        achievements = [a.title for a in p.key_achievements.all()]
        skill_names = [s.name for s in p.skills.all()]
        items_list.append({
            "src": p.image or "Project Images/Portfolio Website.png",
            "alt": p.title,
            "title": p.title,
            "subtitle": p.subtitle or "System & Backend Architecture",
            "description": p.description,
            "link": p.link or "",
            "github_link": p.github_link or "",
            "is_github_private": bool(p.is_github_private),
            "stats": p.stats or " • ".join(skill_names[:3]),
            "tools": skill_names if skill_names else ["Python", "Django", "PostgreSQL"],
            "deliverables": achievements if achievements else ["REST API Endpoints", "Database Schema", "High Availability"]
        })

    return {
        "user": user,
        "skills": skills,
        "projects": projects,
        "mini_projects": mini_projects,
        "experiences": experiences,
        "impact_data": impact_data,
        "services": services,
        "buttons": buttons,
        "social_links": social_links,
        "origin": origin,
        "chapter_learning": chapter_learning,
        "chapter_freelance": chapter_freelance,
        "about_skills": about_skills,
        "works_json": json.dumps(works_list),
        "mini_projects_json": json.dumps(works_list),
        "items_json": json.dumps(items_list),
        "featured_projects_json": json.dumps(items_list),
    }


def portfolio_view(request: HttpRequest) -> HttpResponse:
    """Render the ECHO Developer Portfolio with dynamic Django context."""
    lang = request.GET.get('lang') or request.COOKIES.get('django_language') or 'en'
    if lang in ['uz', 'en', 'ru']:
        translation.activate(lang)
    else:
        lang = 'en'
        translation.activate('en')

    context = get_portfolio_context()
    context['current_lang'] = lang
    response = render(request, "index.html", context)
    response.set_cookie('django_language', lang, max_age=31536000)
    response['Cache-Control'] = 'no-cache, no-store, must-revalidate'
    response['Pragma'] = 'no-cache'
    response['Expires'] = '0'
    return response


def api_portfolio_data(request: HttpRequest) -> JsonResponse:
    """REST API endpoint returning complete portfolio data as JSON."""
    lang = request.GET.get('lang') or request.COOKIES.get('django_language') or 'en'
    if lang in ['uz', 'en', 'ru']:
        translation.activate(lang)
    else:
        lang = 'en'
        translation.activate('en')

    ctx = get_portfolio_context()
    user = ctx["user"]

    data = {
        "user": {
            "name": f"{user.first_name} {user.last_name}" if user else "Ozodjon Xasanov",
            "first_name": user.first_name if user else "Ozodjon",
            "last_name": user.last_name if user else "Xasanov",
            "title": user.professional_title if user else "Backend Developer & Architect",
            "address1": user.address1 if user else "FROM UZBEKISTAN",
            "address2": user.address2 if user else "TASHKENT",
            "bio": user.bio if user else "",
            "about_tagline": user.about_tagline if user else "",
            "about_statement": user.about_statement if user else "",
        },
        "buttons": [
            {"id": b.id, "title": b.title, "link": b.link} for b in ctx["buttons"]
        ],
        "services": [
            {
                "id": s.id,
                "title": s.title,
                "description": s.description,
                "deliverables": s.deliverables
            } for s in ctx["services"]
        ],
        "origin": {
            "badge": ctx["origin"].badge if ctx["origin"] else "ORIGIN & FOUNDATIONS",
            "title": ctx["origin"].title if ctx["origin"] else "WHERE<br>I'VE BEEN",
            "description": ctx["origin"].description if ctx["origin"] else "",
            "hud_phase": ctx["origin"].hud_phase if ctx["origin"] else "ORIGIN & FOUNDATIONS"
        } if ctx["origin"] else None,
        "skills": [{"name": s.name, "category": s.category, "is_featured_in_about": s.is_featured_in_about} for s in ctx["skills"]],
        "projects": [
            {
                "id": p.id,
                "title": p.title,
                "subtitle": p.subtitle,
                "description": p.description,
                "link": p.link,
                "github_link": p.github_link,
                "is_github_private": p.is_github_private,
                "image": p.image,
                "stats": p.stats,
                "skills": [s.name for s in p.skills.all()],
                "key_achievements": [a.title for a in p.key_achievements.all()],
            }
            for p in ctx["projects"]
        ],
        "mini_projects": [
            {
                "id": mp.id,
                "title": mp.title,
                "subtitle": mp.subtitle,
                "description": mp.description,
                "link": mp.link,
                "github_link": mp.github_link,
                "is_github_private": mp.is_github_private,
                "image": mp.image,
                "stats": mp.stats,
                "deliverables": mp.deliverables,
                "skills": [s.name for s in mp.skills.all()],
            }
            for mp in ctx["mini_projects"]
        ],
        "experiences": [
            {
                "role": e.role,
                "company": e.company,
                "period": e.period,
                "location": e.location,
                "description": e.description,
                "deliverables": e.deliverables,
            }
            for e in ctx["experiences"]
        ]
    }
    return JsonResponse(data, safe=False, json_dumps_params={'ensure_ascii': False, 'indent': 2})


@csrf_exempt
def api_contact(request: HttpRequest) -> JsonResponse:
    """Handle contact submissions via Fetch / AJAX or standard form POST."""
    if request.method != "POST":
        return JsonResponse({"success": False, "message": "Faqat POST so'rov qabul qilinadi."}, status=405)

    name = ""
    email = ""
    message = ""

    if request.content_type == "application/json":
        try:
            body = json.loads(request.body.decode("utf-8"))
            name = body.get("name", "").strip()
            email = body.get("email", "").strip()
            message = body.get("message", "").strip()
        except Exception:
            pass
    else:
        name = request.POST.get("name", "").strip()
        email = request.POST.get("email", "").strip()
        message = request.POST.get("message", "").strip()

    if not name or not email or not message:
        return JsonResponse({"success": False, "message": "Iltimos, barcha maydonlarni to'ldiring."}, status=400)

    # Save to database
    contact_obj = ContactMessage.objects.create(
        name=name,
        email=email,
        message=message,
        source="ECHO Portfolio v2"
    )

    # Send telegram message
    sent_telegram, msg_text = send_telegram_message(name, email, message, "ECHO Portfolio v2")
    if sent_telegram:
        contact_obj.is_sent_to_telegram = True
        contact_obj.save(update_fields=['is_sent_to_telegram'])

    return JsonResponse({
        "success": True,
        "message": "Xabaringiz muvaffaqiyatli qabul qilindi! Rahmat, tez orada javob qaytaraman. ✅"
    })
