"""
Django admin configuration for the main application.

This module contains all the admin configurations for managing
portfolio data through the Django admin interface.
"""

from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin

from .models import (
    User,
    Skill,
    Project,
    KeyAchievement,
    ImpactAndAchievementsGlobal,
    ImpactAndAchievements,
    MaAItem,
)


class KeyAchievementInline(admin.TabularInline):
    """Inline admin for Key Achievements within Project admin."""
    
    model = KeyAchievement
    extra = 1
    fields = ('title',)
    verbose_name = "Key Achievement"
    verbose_name_plural = "Key Achievements"


class MaAItemInline(admin.TabularInline):
    """Inline admin for MaA Items within Impact and Achievements admin."""
    
    model = MaAItem
    extra = 1
    fields = ('title',)
    verbose_name = "Achievement Item"
    verbose_name_plural = "Achievement Items"


class ImpactAndAchievementsInline(admin.TabularInline):
    """Inline admin for Impact and Achievements within Global Impact admin."""
    
    model = ImpactAndAchievements
    extra = 1
    fields = ('title',)
    verbose_name = "Achievement Category"
    verbose_name_plural = "Achievement Categories"

class ProjectAdmin(admin.ModelAdmin):
    """Admin configuration for Project model."""
    
    inlines = [KeyAchievementInline]
    list_display = ('title', 'description', 'link')
    search_fields = ('title', 'description')
    filter_horizontal = ('skills',)
    fieldsets = (
        ('Project Information', {
            'fields': ('title', 'description', 'link')
        }),
        ('Skills Used', {
            'fields': ('skills',)
        }),
    )


class ImpactAndAchievementsGlobalAdmin(admin.ModelAdmin):
    """Admin configuration for Global Impact and Achievements model."""
    
    inlines = [ImpactAndAchievementsInline]
    list_display = ('title',)
    search_fields = ('title',)
    fieldsets = (
        ('Global Impact Information', {
            'fields': ('title',)
        }),
    )


class ImpactAndAchievementsAdmin(admin.ModelAdmin):
    """Admin configuration for Impact and Achievements model."""
    
    inlines = [MaAItemInline]
    list_display = ('title', 'global_impact')
    search_fields = ('title',)
    list_filter = ('global_impact',)
    fieldsets = (
        ('Achievement Information', {
            'fields': ('title', 'global_impact')
        }),
    )


class MaAItemAdmin(admin.ModelAdmin):
    """Admin configuration for MaA Item model."""
    
    list_display = ('title', 'maa')
    search_fields = ('title',)
    list_filter = ('maa',)
    fieldsets = (
        ('Item Information', {
            'fields': ('title', 'maa')
        }),
    )

class SkillAdmin(admin.ModelAdmin):
    """Admin configuration for Skill model."""
    
    list_display = ('name',)
    search_fields = ('name',)
    ordering = ('name',)


class UserAdmin(BaseUserAdmin):
    """Extended admin configuration for User model."""
    
    model = User
    fieldsets = BaseUserAdmin.fieldsets + (
        ('Professional Information', {
            'fields': (
                'professional_title',
                'adress',
            )
        }),
        ('Social Media', {
            'fields': (
                'github_username',
                'instagram_username',
                'telegram_username',
            )
        }),
        ('Skills', {
            'fields': ('skills',)
        }),
    )
    filter_horizontal = ('skills',)
    list_display = (
        'username',
        'email',
        'first_name',
        'last_name',
        'professional_title'
    )
    search_fields = ('username', 'email', 'first_name', 'last_name')


# Register all models with their respective admin classes
admin.site.register(User, UserAdmin)
admin.site.register(Skill, SkillAdmin)
admin.site.register(Project, ProjectAdmin)
admin.site.register(ImpactAndAchievementsGlobal, ImpactAndAchievementsGlobalAdmin)
admin.site.register(ImpactAndAchievements, ImpactAndAchievementsAdmin)
# admin.site.register(MaAItem, MaAItemAdmin)
admin.site.register(KeyAchievement)
