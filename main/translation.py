from modeltranslation.translator import register, TranslationOptions
from .models import User, Service, Project, MiniProject, OriginFoundation, Button, ExperienceChapter


@register(User)
class UserTranslationOptions(TranslationOptions):
    fields = (
        'professional_title',
        'address1',
        'address2',
        'bio',
        'about_tagline',
        'about_statement'
    )


@register(Service)
class ServiceTranslationOptions(TranslationOptions):
    fields = ('title', 'description', 'deliverables')


@register(Project)
class ProjectTranslationOptions(TranslationOptions):
    fields = ('title', 'subtitle', 'description', 'stats')


@register(MiniProject)
class MiniProjectTranslationOptions(TranslationOptions):
    fields = ('title', 'subtitle', 'description', 'stats', 'deliverables')


@register(OriginFoundation)
class OriginFoundationTranslationOptions(TranslationOptions):
    fields = ('badge', 'title', 'description', 'hud_phase')


@register(Button)
class ButtonTranslationOptions(TranslationOptions):
    fields = ('title',)


@register(ExperienceChapter)
class ExperienceChapterTranslationOptions(TranslationOptions):
    fields = (
        'button_label',
        'eyebrow',
        'badge',
        'role_title',
        'description',
        'milestone_1_label',
        'milestone_1_text',
        'milestone_2_label',
        'milestone_2_text',
        'milestone_3_label',
        'milestone_3_text',
    )
