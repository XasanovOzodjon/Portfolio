import io
import os
import uuid
import logging
from PIL import Image, ImageOps
from django.conf import settings
from django.core.files.base import ContentFile
from django.utils.text import slugify
from django.contrib.auth.models import AbstractUser
from django.db import models

logger = logging.getLogger(__name__)


def convert_uploaded_image_to_webp(image_field, folder='projects', max_size=(1920, 1920), quality=85):
    """
    Yangi yuklangan har qanday formatdagi (JPG, PNG, GIF, BMP, TIFF va h.k.) rasmni
    avtomatik ravishda sifatli WebP formatiga o'tkazadi va optimal hajmda saqlaydi.
    """
    if not image_field:
        return

    # Faqat yangi yuklangan (hali fayl tizimiga yozilmagan) fayllar uchun
    if hasattr(image_field, '_committed') and not image_field._committed:
        try:
            image_field.seek(0)
            img = Image.open(image_field)

            # EXIF orientatsiyasini to'g'irlash
            img = ImageOps.exif_transpose(img)

            # Rang modellarini to'g'ri moslashtirish (shaffoflik bo'lsa RGBA, bo'lmasa RGB)
            if img.mode in ('RGBA', 'LA') or (img.mode == 'P' and 'transparency' in img.info):
                img = img.convert('RGBA')
            else:
                img = img.convert('RGB')

            # O'lchamni chegaralash (1920px dan katta bo'lsa proporsional kichraytirish)
            img.thumbnail(max_size, Image.Resampling.LANCZOS)

            # WebP formatida xotiraga yozish
            output = io.BytesIO()
            img.save(output, format='WEBP', quality=quality, method=6)
            output.seek(0)

            # Fayl nomini tozalash va WebP kengaytmasi berish
            orig_filename = os.path.basename(getattr(image_field, 'name', '') or 'image')
            base_name, _ = os.path.splitext(orig_filename)
            clean_slug = slugify(base_name) or 'project_img'
            unique_filename = f"{clean_slug}_{uuid.uuid4().hex[:8]}.webp"

            image_field.save(unique_filename, ContentFile(output.getvalue()), save=False)
        except Exception as e:
            logger.warning(f"Rasm WebP formatiga o'tkazilmadi ({e}), asl nusxa saqlanadi.")


class Skill(models.Model):
    """Model for representing technical skills."""
    name = models.CharField(max_length=50, unique=True)
    category = models.CharField(max_length=50, default='Backend', blank=True)
    is_featured_in_about = models.BooleanField(
        default=False, 
        help_text="About me bo'limidagi (DISCIPLINE & CRAFT) qatorida ko'rsatilsinmi?"
    )

    class Meta:
        ordering = ['name']
        verbose_name = 'Skill'
        verbose_name_plural = 'Skills'

    def __str__(self):
        return self.name


class User(AbstractUser):
    """Extended user model with portfolio information."""
    professional_title = models.CharField(
        max_length=150, 
        blank=True,
        default='Editorial Developer & Backend Architect',
        help_text='Professional title or job position'
    )
    address1 = models.CharField(
        max_length=100, 
        blank=True,
        default='FROM UZBEKISTAN',
        help_text='Manzil 1 (masalan: FROM UZBEKISTAN)'
    )
    address2 = models.CharField(
        max_length=100, 
        blank=True,
        default='TASHKENT',
        help_text='Manzil 2 (masalan: TASHKENT)'
    )
    bio = models.TextField(
        blank=True,
        default='PASSIONATE ABOUT SCALABLE ARCHITECTURES, HIGH-PERFORMANCE APIS AND IMMERSIVE DIGITAL SYSTEMS.'
    )
    about_tagline = models.CharField(
        max_length=255,
        blank=True,
        default='TURNING VISIONARY IDEAS INTO FAST, DISTINCTIVE DIGITAL EXPERIENCES',
        help_text="About me qismidagi yuqori sarlavha"
    )
    about_statement = models.TextField(
        blank=True,
        default='I SPECIALIZE IN BUILDING BESPOKE DIGITAL PRODUCTS WHERE PURPOSEFUL EDITORIAL DESIGN MEETS ROBUST ENGINEERING. CREATING EXPERIENCES WITH INTENTIONAL MOTION, SYSTEMATIC RIGOR, AND MEASURABLE IMPACT.',
        help_text="About me qismidagi asosiy falsafa/bayonot matni"
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
    title = models.CharField(max_length=120)
    subtitle = models.CharField(max_length=150, blank=True, default='Mobile & Backend Architecture')
    description = models.TextField(help_text='Detailed project description')
    link = models.URLField(blank=True, help_text='Live project URL')
    github_link = models.URLField(blank=True, help_text='GitHub repository URL')
    image = models.ImageField(
        upload_to='projects/',
        max_length=255,
        blank=True,
        null=True,
        help_text="Loyiha rasmi (istalgan format: JPG, PNG, WebP yuklashingiz mumkin, avtomatik WebP qilinadi)"
    )
    stats = models.CharField(max_length=200, blank=True, default='High Concurrency • Clean Architecture • REST API')
    skills = models.ManyToManyField(
        'Skill', 
        blank=True,
        help_text='Technologies used in this project'
    )
    is_featured = models.BooleanField(default=True)
    is_github_private = models.BooleanField(default=False, help_text="GitHub yopiq (Private) bo'lsa belgilang — qulfcha belgisi chiqadi")
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order', '-id']
        verbose_name = 'Project'
        verbose_name_plural = 'Projects'

    def save(self, *args, **kwargs):
        convert_uploaded_image_to_webp(self.image, folder='projects')
        super().save(*args, **kwargs)

    @property
    def image_url(self):
        if not self.image:
            return ""
        name = str(self.image).strip()
        if not name:
            return ""
        if name.startswith(('http://', 'https://', '/')):
            return name
        if name.startswith(('Project Images/', 'Landing Page Assest/', 'assets/')):
            return f"/{name}"
        media_url = getattr(settings, 'MEDIA_URL', '/media/').rstrip('/')
        return f"{media_url}/{name.lstrip('/')}"

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


class MiniProject(models.Model):
    """Model for representing Mini Projects (formerly Landing Pages WorksWheel)."""
    title = models.CharField(max_length=120)
    subtitle = models.CharField(max_length=150, blank=True, default='Interactive Frontend & Micro-Experience')
    description = models.TextField(help_text='Batafsil tavsif')
    link = models.URLField(blank=True, help_text='Jonli demo havolasi')
    github_link = models.URLField(blank=True, help_text='GitHub repo havolasi')
    image = models.ImageField(
        upload_to='mini_projects/',
        max_length=255,
        blank=True,
        null=True,
        help_text="Mini loyiha rasmi (istalgan format: JPG, PNG, WebP yuklashingiz mumkin, avtomatik WebP qilinadi)"
    )
    stats = models.CharField(max_length=200, blank=True, default='WebGL • Interactive Motion • High Performance')
    deliverables = models.CharField(max_length=255, blank=True, default='Interactive UI • Micro-Animations • Responsive Layout')
    skills = models.ManyToManyField(
        'Skill', 
        blank=True,
        help_text='Mini loyihada ishlatilgan texnologiyalar'
    )
    is_github_private = models.BooleanField(default=False, help_text="GitHub yopiq (Private) bo'lsa belgilang — qulfcha chiqadi")
    order = models.PositiveIntegerField(default=1)
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ['order', 'id']
        verbose_name = 'Mini Project'
        verbose_name_plural = 'Mini Projects'

    def save(self, *args, **kwargs):
        convert_uploaded_image_to_webp(self.image, folder='mini_projects')
        super().save(*args, **kwargs)

    @property
    def image_url(self):
        if not self.image:
            return ""
        name = str(self.image).strip()
        if not name:
            return ""
        if name.startswith(('http://', 'https://', '/')):
            return name
        if name.startswith(('Project Images/', 'Landing Page Assest/', 'assets/')):
            return f"/{name}"
        media_url = getattr(settings, 'MEDIA_URL', '/media/').rstrip('/')
        return f"{media_url}/{name.lstrip('/')}"

    def __str__(self):
        return f"{self.order}. {self.title}"


class Experience(models.Model):
    """Model for experience section items in horizontal stage."""
    period = models.CharField(max_length=80, default='2024 — PRESENT')
    role = models.CharField(max_length=120, default='Lead Backend Engineer')
    company = models.CharField(max_length=120, default='Independent Architecture')
    location = models.CharField(max_length=100, default='Tashkent, UZ')
    description = models.TextField()
    deliverables = models.CharField(
        max_length=255, 
        blank=True, 
        default='Microservices • Telegram Bot Ecosystem • Database Optimization'
    )
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order', 'id']
        verbose_name = 'Experience'
        verbose_name_plural = 'Experiences'

    def __str__(self):
        return f"{self.role} @ {self.company} ({self.period})"


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


class ContactMessage(models.Model):
    """Model for storing submitted contact messages."""
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    source = models.CharField(max_length=50, default='EGO Portfolio v2')
    is_sent_to_telegram = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']
        verbose_name = 'Contact Message'
        verbose_name_plural = 'Contact Messages'

    def __str__(self):
        return f"{self.name} ({self.email}) - {self.created_at.strftime('%Y-%m-%d %H:%M')}"


class Service(models.Model):
    """Model for services displayed in the accordion on the portfolio."""
    title = models.CharField(max_length=120, help_text="Xizmat nomi (masalan: UI/UX, WEB DESIGN, LANDING PAGE DESIGN)")
    description = models.TextField(help_text="Xizmat haqida batafsil ma'lumot")
    deliverables = models.CharField(max_length=255, help_text="DELIVERABLES (masalan: FULL RESPONSIVE WEB DESIGNS, FIGMA SYSTEM)")
    order = models.PositiveIntegerField(default=1, help_text="Tartib raqami (1, 2, 3...)")
    is_active = models.BooleanField(default=True, help_text="Saytda ko'rsatilsinmi?")

    class Meta:
        ordering = ['order', 'id']
        verbose_name = 'Service'
        verbose_name_plural = 'Services'

    def __str__(self):
        return f"{self.order}. {self.title}"


class Button(models.Model):
    """Model for custom action / social buttons (e.g. near CONTACT ME in footer)."""
    title = models.CharField(max_length=60, help_text="Tugma ustidagi yozuv (masalan: TELEGRAM, GITHUB, LINKEDIN, TWITTER)")
    link = models.URLField(help_text="Tugma bosilganda o'tadigan havola (URL)")
    order = models.PositiveIntegerField(default=1, help_text="Tartib raqami (1, 2, 3...)")
    is_active = models.BooleanField(default=True, help_text="Saytda ko'rinsinmi?")

    class Meta:
        ordering = ['order', 'id']
        verbose_name = 'Button (Tugma)'
        verbose_name_plural = 'Buttons (Tugmalar)'

    def __str__(self):
        return f"{self.order}. {self.title} ({self.link})"


class OriginFoundation(models.Model):
    """Model for ORIGIN & FOUNDATIONS section of the experience stage."""
    badge = models.CharField(max_length=100, default='ORIGIN & FOUNDATIONS', help_text="Kichik tepa nishon matni")
    title = models.CharField(max_length=120, default="WHERE<br>I'VE BEEN", help_text="Katta sarlavha (HTML <br> teglari bilan)")
    description = models.TextField(default="My professional journey through different roles and environments.", help_text="Tavsif matni")
    hud_phase = models.CharField(max_length=100, default="ORIGIN & FOUNDATIONS", help_text="Tepa HUD progress panelida chiqadigan faza nomi")

    class Meta:
        verbose_name = 'Origin & Foundation'
        verbose_name_plural = 'Origin & Foundations'

    def __str__(self):
        return self.badge


class ExperienceChapter(models.Model):
    """Model for Experience stage chapters (e.g. SELF-DIRECTED LEARNING, FREELANCE)."""
    chapter_id = models.CharField(max_length=50, default='learning', help_text="Texnik identifikator: 'learning' yoki 'freelance'")
    button_label = models.CharField(max_length=50, default='LEARNING', help_text="Pastki status bardagi sakrash tugmasi matni (masalan: LEARNING, FREELANCE)")
    date_range = models.CharField(max_length=60, default='2023 — 2025', help_text="Vaqt oralig'i (masalan: 2023 — 2025 yoki 2026 — PRESENT)")
    eyebrow = models.CharField(max_length=120, default='SELF-DIRECTED LEARNING', help_text="Yuqori kichik sarlavha (masalan: SELF-DIRECTED LEARNING)")
    badge = models.CharField(max_length=60, blank=True, default='', help_text="Ixtiyoriy kichik badge (masalan: COMMERCIAL yoki bo'sh qoldiring)")
    role_title = models.CharField(max_length=150, default='CREATIVE<br>TECHNOLOGIST', help_text="Katta rol sarlavhasi (HTML <br> tegi bilan)")
    description = models.TextField(default='Intensive self-education period exploring web technologies, creative coding, and modern development practices.')
    
    milestone_1_label = models.CharField(max_length=80, default='MILESTONE 01', help_text="1-bosqich yorlig'i")
    milestone_1_text = models.CharField(max_length=255, default='Completed 500+ hours of hands-on development', help_text="1-bosqich matni")
    milestone_2_label = models.CharField(max_length=80, default='MILESTONE 02', help_text="2-bosqich yorlig'i")
    milestone_2_text = models.CharField(max_length=255, default='Mastered React, Node.js, and TypeScript ecosystem', help_text="2-bosqich matni")
    milestone_3_label = models.CharField(max_length=80, default='MILESTONE 03', help_text="3-bosqich yorlig'i")
    milestone_3_text = models.CharField(max_length=255, default='Built portfolio of 15+ production-ready projects', help_text="3-bosqich matni")
    order = models.PositiveIntegerField(default=1, help_text="Tartib raqami (1: Learning, 2: Freelance)")

    class Meta:
        ordering = ['order', 'id']
        verbose_name = 'Experience Chapter'
        verbose_name_plural = 'Experience Chapters'

    def __str__(self):
        return f"{self.eyebrow} ({self.date_range})"
