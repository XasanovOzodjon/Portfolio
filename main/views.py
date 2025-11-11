"""
Django views for the main application.

This module contains all the view functions for handling portfolio
data display and contact form submissions.
"""

import logging
import requests

from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpRequest
from django.contrib import messages

from .models import (
    User, 
    Skill, 
    Project, 
    KeyAchievement, 
    ImpactAndAchievementsGlobal, 
    ImpactAndAchievements, 
    MaAItem
)
from core.settings import TOKEN, CHAT_ID


# Logger setup
logger = logging.getLogger(__name__)


def get_full_portfolio_data():
    """
    Retrieve and organize all portfolio data.
    
    Returns:
        tuple: A tuple containing (user, skills, projects, impact_achievements)
    """
    user = User.objects.first()
    skills = user.skills.all() if user else []
    projects = Project.objects.all() if user else []
    
    # Add key achievements to each project
    for project in projects:
        project.key_achievements_list = project.key_achievements.all()
    
    impact_and_achievements = ImpactAndAchievementsGlobal.objects.all()
    
    # Get achievements and items for each global impact
    for global_impact in impact_and_achievements:
        global_impact.achievements = global_impact.impact_achievements_items.all()
        for achievement in global_impact.achievements:
            achievement.items = achievement.maa_items.all()
    
    return user, skills, projects, impact_and_achievements

def send_telegram_message(name, email, message, source="Portfolio"):
    """
    Send a contact message to Telegram bot.
    
    Args:
        name (str): Contact's name
        email (str): Contact's email address
        message (str): Contact message content
        source (str): Source page identifier (default: "Portfolio")
    
    Returns:
        tuple: (success_boolean, message_text)
    """
    telegram_message = (
        f"{source} sahifasidan xabar:\n\n"
        f"Name🫡: {name}\n"
        f"Email📩: {email}\n"
        f"Message🔤: {message}"
    )
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
    """
    Handle the main portfolio page display and contact form submissions.
    
    Args:
        request (HttpRequest): The HTTP request object
        
    Returns:
        HttpResponse: Rendered template or redirect response
    """
    user, skills, projects, maa_data = get_full_portfolio_data()
    
    context = {
        'user': user,
        'skills': skills,
        'projects': projects,
        'MaA': maa_data,
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
    
    return render(request, 'index.html', context)
