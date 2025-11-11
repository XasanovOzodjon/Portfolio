"""
Portfolio models for Django application.

This module contains models for user management, projects, skills,
and impact achievements tracking.
"""

from django.contrib.auth.models import AbstractUser
from django.db import models


class Skill(models.Model):
    """Model for representing technical skills."""
    
    name = models.CharField(max_length=50, unique=True)

    class Meta:
        ordering = ['name']
        verbose_name = 'Skill'
        verbose_name_plural = 'Skills'

    def __str__(self):
        return self.name


class User(AbstractUser):
    """Extended user model with additional portfolio information."""
    
    professional_title = models.CharField(
        max_length=100, 
        blank=True,
        help_text='Professional title or job position'
    )
    adress = models.CharField(
        max_length=255, 
        blank=True,
        help_text='Current location address'
    )
    github_username = models.CharField(
        max_length=39, 
        blank=True,
        help_text='GitHub username (without @)'
    )
    instagram_username = models.CharField(
        max_length=30, 
        blank=True,
        help_text='Instagram username (without @)'
    )
    telegram_username = models.CharField(
        max_length=32, 
        blank=True,
        help_text='Telegram username (without @)'
    )
    skills = models.ManyToManyField(
        'Skill', 
        blank=True,
        help_text='Technical skills'
    )

    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'Users'

    def __str__(self):
        return self.username


class Project(models.Model):
    """Model for representing portfolio projects."""
    
    title = models.CharField(max_length=100)
    description = models.TextField(
        help_text='Detailed project description'
    )
    link = models.URLField(
        blank=True,
        help_text='Project URL or repository link'
    )
    skills = models.ManyToManyField(
        'Skill', 
        blank=True,
        help_text='Technologies used in this project'
    )

    class Meta:
        ordering = ['-id']
        verbose_name = 'Project'
        verbose_name_plural = 'Projects'

    def __str__(self):
        return self.title


class KeyAchievement(models.Model):
    """Model for representing project key achievements."""
    
    project = models.ForeignKey(
        Project, 
        on_delete=models.CASCADE, 
        related_name='key_achievements'
    )
    title = models.CharField(max_length=255)

    class Meta:
        ordering = ['id']
        verbose_name = 'Key Achievement'
        verbose_name_plural = 'Key Achievements'

    def __str__(self):
        return f"{self.project.title} - {self.title}"


class ImpactAndAchievementsGlobal(models.Model):
    """Model for global impact and achievements categories."""
    
    title = models.CharField(max_length=128)

    class Meta:
        ordering = ['title']
        verbose_name = 'Impact Category'
        verbose_name_plural = 'Impact Categories'

    def __str__(self):
        return self.title


class ImpactAndAchievements(models.Model):
    """Model for specific impact and achievement areas."""
    
    global_impact = models.ForeignKey(
        ImpactAndAchievementsGlobal, 
        on_delete=models.CASCADE, 
        related_name='impact_achievements_items'
    )
    title = models.CharField(max_length=128)

    class Meta:
        ordering = ['title']
        verbose_name = 'Impact Achievement'
        verbose_name_plural = 'Impact Achievements'

    def __str__(self):
        return f"{self.global_impact.title} - {self.title}"


class MaAItem(models.Model):
    """Model for individual impact and achievement items."""
    
    maa = models.ForeignKey(
        ImpactAndAchievements, 
        on_delete=models.CASCADE, 
        related_name='maa_items'
    )
    title = models.CharField(max_length=255)

    class Meta:
        ordering = ['id']
        verbose_name = 'Achievement Item'
        verbose_name_plural = 'Achievement Items'

    def __str__(self):
        return f"{self.maa.title} - {self.title}"