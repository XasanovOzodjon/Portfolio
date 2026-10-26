from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.utils.html import format_html
from modeltranslation.admin import TabbedTranslationAdmin, TranslationAdmin

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


class KeyAchievementInline(admin.TabularInline):
    model = KeyAchievement
    extra = 1
    fields = ('title',)


class MaAItemInline(admin.TabularInline):
    model = MaAItem
    extra = 1
    fields = ('title',)


class ImpactAndAchievementsInline(admin.TabularInline):
    model = ImpactAndAchievements
    extra = 1
    fields = ('title',)


@admin.register(Project)
class ProjectAdmin(TabbedTranslationAdmin):
    inlines = [KeyAchievementInline]
    list_display = ('image_thumb', 'title', 'subtitle', 'link', 'is_github_private', 'is_featured', 'order')
    list_display_links = ('image_thumb', 'title')
    list_editable = ('is_github_private', 'is_featured', 'order')
    search_fields = ('title', 'subtitle', 'description')
    filter_horizontal = ('skills',)
    readonly_fields = ('image_preview_box',)
    fields = (
        'title',
        'subtitle',
        'description',
        'link',
        'github_link',
        'is_github_private',
        'is_featured',
        'order',
        'image',
        'image_preview_box',
        'stats',
        'skills'
    )

    def image_thumb(self, obj):
        url = obj.image_url
        if url:
            return format_html(
                '<img src="{}" style="width: 48px; height: 32px; object-fit: cover; border-radius: 4px; border: 1px solid #444;" />',
                url
            )
        return "—"
    image_thumb.short_description = "Rasm"

    def image_preview_box(self, obj):
        url = obj.image_url
        if url:
            return format_html(
                '<div style="margin-top: 6px;">'
                '<img src="{}" style="max-width: 320px; max-height: 180px; object-fit: cover; border-radius: 8px; border: 1px solid #444;" /><br>'
                '<span style="font-size: 11px; color: #888;">URL: {}</span>'
                '</div>',
                url, url
            )
        return "Rasm hali yuklanmagan"
    image_preview_box.short_description = "Hozirgi rasm"


@admin.register(MiniProject)
class MiniProjectAdmin(TabbedTranslationAdmin):
    list_display = ('image_thumb', 'order', 'title', 'subtitle', 'is_github_private', 'is_active')
    list_display_links = ('image_thumb', 'title')
    list_editable = ('order', 'is_github_private', 'is_active')
    search_fields = ('title', 'subtitle', 'description', 'deliverables')
    filter_horizontal = ('skills',)
    list_filter = ('is_active', 'is_github_private')
    readonly_fields = ('image_preview_box',)
    fields = (
        'order',
        'title',
        'subtitle',
        'description',
        'link',
        'github_link',
        'is_github_private',
        'is_active',
        'image',
        'image_preview_box',
        'stats',
        'deliverables',
        'skills'
    )

    def image_thumb(self, obj):
        url = obj.image_url
        if url:
            return format_html(
                '<img src="{}" style="width: 48px; height: 32px; object-fit: cover; border-radius: 4px; border: 1px solid #444;" />',
                url
            )
        return "—"
    image_thumb.short_description = "Rasm"

    def image_preview_box(self, obj):
        url = obj.image_url
        if url:
            return format_html(
                '<div style="margin-top: 6px;">'
                '<img src="{}" style="max-width: 320px; max-height: 180px; object-fit: cover; border-radius: 8px; border: 1px solid #444;" /><br>'
                '<span style="font-size: 11px; color: #888;">URL: {}</span>'
                '</div>',
                url, url
            )
        return "Rasm hali yuklanmagan"
    image_preview_box.short_description = "Hozirgi rasm"


@admin.register(Experience)
class ExperienceAdmin(admin.ModelAdmin):
    list_display = ('role', 'company', 'period', 'location', 'order')
    list_editable = ('order',)
    search_fields = ('role', 'company', 'description')


@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'is_featured_in_about')
    list_editable = ('is_featured_in_about',)
    search_fields = ('name', 'category')
    list_filter = ('category', 'is_featured_in_about')


@admin.register(Button)
class ButtonAdmin(TabbedTranslationAdmin):
    list_display = ('order', 'title', 'link', 'is_active')
    list_display_links = ('title',)
    list_editable = ('order', 'is_active')
    search_fields = ('title', 'link')
    list_filter = ('is_active',)


@admin.register(OriginFoundation)
class OriginFoundationAdmin(TabbedTranslationAdmin):
    list_display = ('badge', 'title', 'hud_phase')
    search_fields = ('badge', 'title', 'description')


@admin.register(ExperienceChapter)
class ExperienceChapterAdmin(TabbedTranslationAdmin):
    list_display = ('order', 'eyebrow', 'date_range', 'button_label')
    list_display_links = ('eyebrow',)
    list_editable = ('order',)
    search_fields = ('eyebrow', 'role_title', 'description')


@admin.register(ImpactAndAchievementsGlobal)
class ImpactAndAchievementsGlobalAdmin(admin.ModelAdmin):
    inlines = [ImpactAndAchievementsInline]
    list_display = ('title',)
    search_fields = ('title',)


@admin.register(ImpactAndAchievements)
class ImpactAndAchievementsAdmin(admin.ModelAdmin):
    inlines = [MaAItemInline]
    list_display = ('title', 'global_impact')
    list_filter = ('global_impact',)


@admin.register(Service)
class ServiceAdmin(TabbedTranslationAdmin):
    list_display = ('order', 'title', 'deliverables', 'is_active')
    list_display_links = ('title',)
    list_editable = ('order', 'is_active')
    search_fields = ('title', 'description', 'deliverables')
    list_filter = ('is_active',)


@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'created_at', 'is_sent_to_telegram')
    list_filter = ('is_sent_to_telegram', 'created_at')
    search_fields = ('name', 'email', 'message')
    readonly_fields = ('name', 'email', 'message', 'source', 'is_sent_to_telegram', 'created_at')


@admin.register(User)
class UserAdmin(BaseUserAdmin):
    model = User
    fieldsets = BaseUserAdmin.fieldsets + (
        ('Portfolio Profile & About Me (O\'zbekcha)', {
            'fields': (
                'professional_title_uz',
                'address1_uz',
                'address2_uz',
                'bio_uz',
                'about_tagline_uz',
                'about_statement_uz',
            )
        }),
        ('Portfolio Profile & About Me (English)', {
            'fields': (
                'professional_title_en',
                'address1_en',
                'address2_en',
                'bio_en',
                'about_tagline_en',
                'about_statement_en',
            )
        }),
        ('Portfolio Profile & About Me (Русский)', {
            'fields': (
                'professional_title_ru',
                'address1_ru',
                'address2_ru',
                'bio_ru',
                'about_tagline_ru',
                'about_statement_ru',
            )
        }),
        ('Skills', {
            'fields': ('skills',)
        }),
    )
    filter_horizontal = ('skills',)
    list_display = ('username', 'first_name', 'last_name', 'professional_title', 'address1', 'address2', 'is_staff')
