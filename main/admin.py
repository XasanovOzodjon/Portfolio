from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import User, Skill, Project, KeyAchievement

class KeyAchievementInline(admin.TabularInline):
    model = KeyAchievement
    extra = 1  # Yangi project yaratganda 1 ta bo'sh KeyAchievement form ko'rsatadi

class ProjectAdmin(admin.ModelAdmin):
    inlines = [KeyAchievementInline]
    list_display = ('title', 'description', 'link')
    search_fields = ('title', 'description')
    filter_horizontal = ('skills',)

class UserAdmin(BaseUserAdmin):
    model = User
    # admin panelda ko'rsatiladigan maydonlar
    fieldsets = BaseUserAdmin.fieldsets + (
        ('Additional Info', {'fields': (
            'professional_title', 
            'adress', 
            'github_username', 
            'instagram_username', 
            'telegram_username', 
        )}),
        ('Skills', {'fields': ('skills',)}),
    )
    filter_horizontal = ('skills',)
    
    list_display = ('username', 'email', 'first_name', 'last_name', 'professional_title')

admin.site.register(User, UserAdmin)
admin.site.register(Skill)
admin.site.register(Project, ProjectAdmin)
# admin.site.register(KeyAchievement)
