from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User, Skill

@admin.register(User)
class CustomUserAdmin(UserAdmin):
    fieldsets = UserAdmin.fieldsets + (
        ('Qo‘shimcha ma’lumotlar', {'fields': ('skills',)}),
    )
    filter_horizontal = ('skills',)

admin.site.register(Skill)
