from django.db import models
from django.contrib.auth.models import AbstractUser

class Skill(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name


class User(AbstractUser):
    professional_title = models.CharField(max_length=100, blank=True)
    adress = models.CharField(max_length=255, blank=True)
    
    github_username = models.CharField(max_length=39, blank=True)
    
    instagram_username = models.CharField(max_length=30, blank=True)
    
    telegram_username = models.CharField(max_length=32, blank=True)
    
    
    skills = models.ManyToManyField('Skill', blank=True)
    def __str__(self):
        return self.username

class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    link = models.URLField(blank=True)
    
    skills = models.ManyToManyField('Skill', blank=True)
    def __str__(self):
        return self.title
    

class KeyAchievement(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='key_achievements')
    title = models.CharField(max_length=255)

    def __str__(self):
        return self.title