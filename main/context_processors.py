from .models import Project, MiniProject, Service, ContactMessage, Skill, Experience, User, Button, OriginFoundation

def admin_dashboard_stats(request):
    """Context processor providing dashboard metrics and feeds for admin."""
    # Only compute for admin URLs to keep standard pages light
    if not request.path.startswith('/admin/'):
        return {}

    try:
        user = User.objects.first()
        total_projects = Project.objects.count()
        total_mini_projects = MiniProject.objects.count()
        total_services = Service.objects.count()
        total_messages = ContactMessage.objects.count()
        unread_messages = ContactMessage.objects.filter(is_sent_to_telegram=False).count()
        total_skills = Skill.objects.count()
        total_experiences = Experience.objects.count()
        recent_messages = ContactMessage.objects.all()[:6]
        recent_projects = Project.objects.all()[:4]
        recent_mini_projects = MiniProject.objects.all()[:4]
        services_list = Service.objects.all()
        buttons_list = Button.objects.all()
        total_buttons = Button.objects.count()

        return {
            'dash_user': user,
            'dash_total_projects': total_projects,
            'dash_total_mini_projects': total_mini_projects,
            'dash_total_services': total_services,
            'dash_total_buttons': total_buttons,
            'dash_buttons_list': buttons_list,
            'dash_total_messages': total_messages,
            'dash_unread_messages': unread_messages,
            'dash_total_skills': total_skills,
            'dash_total_experiences': total_experiences,
            'dash_recent_messages': recent_messages,
            'dash_recent_projects': recent_projects,
            'dash_recent_mini_projects': recent_mini_projects,
            'dash_services_list': services_list,
        }
    except Exception:
        return {}
