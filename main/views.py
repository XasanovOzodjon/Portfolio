from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpRequest
from django.contrib import messages
from django.urls import reverse
import requests
import logging

from .models import User, Skill, Project, KeyAchievement
from core.settings import TOKEN, CHAT_ID

# Logger setup
logger = logging.getLogger(__name__)

# Create your views here.

def get_full():
    """Helper function to get user and skills data"""
    user = User.objects.first()
    if user:
        skills = user.skills.all()
    else:
        skills = []
    if user:
        projects = Project.objects.all()
    else:
        projects = []
    if projects:
        for project in projects:
            project.key_achievements_list = project.key_achievements.all()
    return user, skills, projects

def send_telegram_message(name, email, message, source="Portfolio"):
    """Helper function to send message to Telegram bot"""
    telegram_message = f"{source} sahifasidan xabar:\n\nName🫡: {name}\nEmail📩: {email}\nMessage🔤: {message}"
    url = f"https://api.telegram.org/bot{TOKEN}/sendMessage"
    payload = {
        "chat_id": CHAT_ID,
        "text": telegram_message
    }
    
    try:
        response = requests.post(url, data=payload, timeout=10)
        if response.status_code == 200:
            return True, 'Xabaringiz muvaffaqiyatli yuborildi! ✅'
        else:
            logger.error(f"Telegram API error: {response.status_code}")
            return False, 'Xatolik yuz berdi, qayta urinib ko\'ring.'
    except requests.exceptions.Timeout:
        logger.error("Telegram API timeout")
        return False, 'Xabar yuborishda vaqt tugadi, qayta urinib ko\'ring.'
    except Exception as e:
        logger.error(f"Telegram message sending error: {e}")
        return False, 'Xatolik yuz berdi, qayta urinib ko\'ring.'

def home_view(request: HttpRequest) -> HttpResponse:
    user, skills, projects = get_full()
    
    data = {
        'user': user,
        'skills': skills,
        'projects': projects,
    }
    
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        message = request.POST.get('message')
        
        # Validate input
        if not all([name, email, message]):
            messages.error(request, 'Barcha maydonlarni to\'ldiring.')
            return redirect('home')
        
        success, message_text = send_telegram_message(name, email, message, "Home")
        if success:
            messages.success(request, message_text)
        else:
            messages.error(request, message_text)
        
        return redirect('home')
    
    return render(request, 'index.html', data)
