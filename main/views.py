import html
import json
import logging
import requests
from django.conf import settings
from django.core.cache import cache
from django.core.exceptions import ValidationError
from django.core.validators import validate_email
from django.http import JsonResponse, HttpResponse, HttpRequest
from django.shortcuts import render, redirect
from django.utils import translation
from django.views.decorators.csrf import ensure_csrf_cookie

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

logger = logging.getLogger(__name__)

# Rate limiting parametrlari
RATE_LIMIT_REQUESTS = 5
RATE_LIMIT_TIMEOUT = 60  # 1 daqiqa (soniyalarda)


def sanitize_telegram_error(error_text: str, token: str | None) -> str:
    """Telegram xatolik xabarlarida bot tokenini maskalash."""
    if token and token in error_text:
        return error_text.replace(token, "[REDACTED_TELEGRAM_TOKEN]")
    return error_text


def get_client_ip(request: HttpRequest) -> str:
    """
    Mijozning haqiqiy IP manzilini xavfsiz olish.
    X-Forwarded-For ni ko'r-ko'rona ishonmaslik kerak (soxtalashtirish xavfi).
    Nginx teskari proksi oxiriga haqiqiy remote_addr ni qo'shadi,
    shuning uchun vergul bilan ajratilgan zanjirning eng oxirgi qiymatini olamiz.
    """
    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
    if x_forwarded_for:
        ips = [ip.strip() for ip in x_forwarded_for.split(',') if ip.strip()]
        if ips:
            return ips[-1]
    return request.META.get('REMOTE_ADDR', '127.0.0.1')


def send_telegram_message(name: str, email: str, message: str, source: str = "ECHO Portfolio v2") -> tuple[bool, str]:
    """Send a contact message to Telegram bot using HTML parse mode and masked logging."""
    token = getattr(settings, 'TOKEN', None)
    chat_id = getattr(settings, 'CHAT_ID', None)
    
    if not token or not chat_id:
        logger.info("Telegram xabari yuborilmadi: TOKEN yoki CHAT_ID sozlanmagan.")
        return True, "Xabar qabul qilindi (Telegram bot token sozlanmagan)."

    # HTML belgilarni xavfsiz escape qilish (XSS va Telegram parse_mode='HTML' buzilishini oldini olish)
    safe_name = html.escape(str(name))
    safe_email = html.escape(str(email))
    safe_source = html.escape(str(source))
    safe_message = html.escape(str(message))

    # Telegram xabar chegarasi 4096 belgi; headerlarni hisobga olib xabarni qirqamiz
    max_msg_len = 3500
    if len(safe_message) > max_msg_len:
        safe_message = safe_message[:max_msg_len] + "\n\n<i>[Xabar Telegram limiti sababli qisqartirildi]</i>"

    telegram_html = (
        f"🚀 <b>{safe_source}</b> orqali yangi xabar!\n\n"
        f"👤 <b>Ism:</b> {safe_name}\n"
        f"📧 <b>Email:</b> {safe_email}\n"
        f"💬 <b>Xabar:</b>\n{safe_message}"
    )
    url = f"https://api.telegram.org/bot{token}/sendMessage"
    payload = {
        "chat_id": chat_id,
        "text": telegram_html,
        "parse_mode": "HTML"
    }

    try:
        response = requests.post(url, data=payload, timeout=8)
        if response.status_code == 200:
            return True, "Xabaringiz muvaffaqiyatli yuborildi! ✅"
        
        sanitized_resp = sanitize_telegram_error(response.text, token)
        logger.error("Telegram API xatosi (status %s): %s", response.status_code, sanitized_resp)
        return False, "Telegram API xatosi"
    except requests.RequestException as e:
        sanitized_err = sanitize_telegram_error(str(e), token)
        logger.warning("Telegram so'rovida tarmoq xatosi: %s", sanitized_err)
        return False, "Telegram tarmog'i bilan bog'lanishda xatolik."
    except Exception as e:
        sanitized_err = sanitize_telegram_error(str(e), token)
        logger.exception("Telegram xabarini yuborishda kutilmagan xatolik: %s", sanitized_err)
        return False, "Kutilmagan xatolik."


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
            "image": mp.image_url or "Landing Page Assest/Screenshot 2026-10-20 at 7.46.25 PM.png",
            "src": mp.image_url or "Landing Page Assest/Screenshot 2026-10-20 at 7.46.25 PM.png",
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
            "src": p.image_url or "Project Images/Portfolio Website.png",
            "image": p.image_url or "Project Images/Portfolio Website.png",
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
        "works_json": works_list,
        "mini_projects_json": works_list,
        "items_json": items_list,
        "featured_projects_json": items_list,
    }


@ensure_csrf_cookie
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
                "image": p.image_url,
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
                "image": mp.image_url,
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


def api_contact(request: HttpRequest) -> JsonResponse:
    """Handle contact submissions via Fetch / AJAX or standard form POST."""
    if request.method != "POST":
        return JsonResponse({"success": False, "message": "Faqat POST so'rov qabul qilinadi."}, status=405)

    client_ip = get_client_ip(request)

    # 1. Rate Limiting: 1 daqiqada maksimum 5 ta so'rov
    cache_key = f"rl_contact_{client_ip}"
    current_count = cache.get(cache_key, 0)
    if current_count >= RATE_LIMIT_REQUESTS:
        logger.warning("Rate limit oshib ketdi. IP: %s (so'rovlar soni: %d)", client_ip, current_count)
        return JsonResponse({
            "success": False,
            "message": "Juda ko'p so'rov yuborildi. Iltimos, 1 daqiqadan so'ng qayta urinib ko'ring."
        }, status=429)

    # 2. JSON va Form ma'lumotlarini qabul qilish
    content_type = request.content_type or ""
    if "application/json" in content_type:
        try:
            body_bytes = request.body or b"{}"
            raw_data = json.loads(body_bytes.decode("utf-8"))
            if not isinstance(raw_data, dict):
                return JsonResponse({"success": False, "message": "Noto'g'ri JSON formati: ob'ekt kutilmoqda."}, status=400)
        except (json.JSONDecodeError, UnicodeDecodeError) as e:
            logger.warning("Yaroqsiz JSON so'rovi qabul qilindi (IP: %s): %s", client_ip, e)
            return JsonResponse({"success": False, "message": "Yuborilgan JSON formati noto'g'ri."}, status=400)
    else:
        raw_data = request.POST.dict()

    # 3. Honeypot tekshiruvi (Anti-spam)
    honeypot = str(raw_data.get("website", "")).strip()
    if honeypot:
        logger.warning("Spam honeypot faollashdi (IP: %s, qiymat: %s). So'rov e'tiborsiz qoldirildi.", client_ip, honeypot)
        # Botni aldash uchun muvaffaqiyatli javob qaytaramiz, lekin bazaga saqlamaymiz
        return JsonResponse({
            "success": True,
            "message": "Xabaringiz muvaffaqiyatli qabul qilindi! Rahmat, tez orada javob qaytaraman. ✅"
        })

    # Rate limit hisoblagichini oshiramiz
    cache.set(cache_key, current_count + 1, timeout=RATE_LIMIT_TIMEOUT)

    # 4. Maydonlarni olish va tozalash
    name = str(raw_data.get("name", "")).strip()
    email = str(raw_data.get("email", "")).strip()
    message = str(raw_data.get("message", "")).strip()

    # Bo'sh maydonlarni tekshirish
    if not name:
        return JsonResponse({"success": False, "message": "Iltimos, ismingizni kiriting."}, status=400)
    if not email:
        return JsonResponse({"success": False, "message": "Iltimos, email manzilingizni kiriting."}, status=400)
    if not message:
        return JsonResponse({"success": False, "message": "Iltimos, xabaringizni kiriting."}, status=400)

    # Maydon uzunliklari tekshiruvi (Model bilan mos: name <= 100, email <= 150, message <= 3000)
    if len(name) > 100:
        return JsonResponse({"success": False, "message": "Ism 100 belgidan oshmasligi kerak."}, status=400)
    if len(email) > 150:
        return JsonResponse({"success": False, "message": "Email manzili 150 belgidan oshmasligi kerak."}, status=400)
    if len(message) > 3000:
        return JsonResponse({"success": False, "message": "Xabar matni 3000 belgidan oshmasligi kerak."}, status=400)

    # Email formatini tekshirish
    try:
        validate_email(email)
    except ValidationError:
        return JsonResponse({"success": False, "message": "Email manzili noto'g'ri formatda kiritildi."}, status=400)

    # 5. Ma'lumotlar bazasiga saqlash
    try:
        contact_obj = ContactMessage.objects.create(
            name=name,
            email=email,
            message=message,
            source="ECHO Portfolio v2"
        )
    except Exception as e:
        logger.exception("Xabarni bazaga saqlashda xatolik yuz berdi: %s", e)
        return JsonResponse({"success": False, "message": "Xabarni saqlashda server xatosi yuz berdi."}, status=500)

    # 6. Telegramga yuborish (Telegram xatosi foydalanuvchiga bildirilmaydi)
    try:
        sent_telegram, _ = send_telegram_message(name, email, message, "ECHO Portfolio v2")
        if sent_telegram:
            contact_obj.is_sent_to_telegram = True
            contact_obj.save(update_fields=['is_sent_to_telegram'])
    except Exception as e:
        logger.exception("Telegram xabari yuborish jarayonida xatolik: %s", e)

    return JsonResponse({
        "success": True,
        "message": "Xabaringiz muvaffaqiyatli qabul qilindi! Rahmat, tez orada javob qaytaraman. ✅"
    })
