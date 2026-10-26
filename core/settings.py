from pathlib import Path
from dotenv import load_dotenv
import os
from decouple import config, Csv
from django.core.exceptions import ImproperlyConfigured

load_dotenv()

BASE_DIR = Path(__file__).resolve().parent.parent

DEBUG = config("DEBUG", default=False, cast=bool)

SECRET_KEY = config("SECRET_KEY", default="")
if not SECRET_KEY:
    if DEBUG:
        SECRET_KEY = "django-insecure-ozodjon-portfolio-dev-secret-key-local-only-replace-in-prod"
    else:
        raise ImproperlyConfigured("SECRET_KEY environment variable is required when DEBUG is False.")

DEFAULT_ALLOWED_HOSTS = "127.0.0.1,localhost,khasanoff.uz,www.khasanoff.uz"
ALLOWED_HOSTS = config("ALLOWED_HOSTS", default=DEFAULT_ALLOWED_HOSTS, cast=Csv())

DEFAULT_CSRF_TRUSTED_ORIGINS = (
    "https://khasanoff.uz,https://www.khasanoff.uz,"
    "http://127.0.0.1,http://127.0.0.1:8000,http://127.0.0.1:8008,http://127.0.0.1:8009,"
    "http://localhost,http://localhost:8000,http://localhost:8008,http://localhost:8009"
)
CSRF_TRUSTED_ORIGINS = config("CSRF_TRUSTED_ORIGINS", default=DEFAULT_CSRF_TRUSTED_ORIGINS, cast=Csv())

# Ngrok kerak bo'lsa, faqat DEBUG=True holatida env orqali aniq domen qo'shiladi
if DEBUG:
    DEBUG_NGROK_ORIGIN = config("DEBUG_NGROK_ORIGIN", default="")
    if DEBUG_NGROK_ORIGIN and DEBUG_NGROK_ORIGIN not in CSRF_TRUSTED_ORIGINS:
        CSRF_TRUSTED_ORIGINS.append(DEBUG_NGROK_ORIGIN)

# Clickjacking himoyasi
X_FRAME_OPTIONS = "DENY"

if not DEBUG:
    SECURE_SSL_REDIRECT = True
    SESSION_COOKIE_SECURE = True
    CSRF_COOKIE_SECURE = True
    SECURE_HSTS_SECONDS = 3600
    SECURE_HSTS_INCLUDE_SUBDOMAINS = True
    SECURE_HSTS_PRELOAD = True
    SECURE_CONTENT_TYPE_NOSNIFF = True
    SECURE_BROWSER_XSS_FILTER = True
    SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')
else:
    SECURE_SSL_REDIRECT = False
    SESSION_COOKIE_SECURE = False
    CSRF_COOKIE_SECURE = False
    SECURE_HSTS_SECONDS = 0
    SECURE_HSTS_INCLUDE_SUBDOMAINS = False
    SECURE_HSTS_PRELOAD = False
    SECURE_CONTENT_TYPE_NOSNIFF = False

TOKEN = config("TOKEN", default="")
CHAT_ID = config("CHAT_ID", default="")

AUTH_USER_MODEL = 'main.User'

INSTALLED_APPS = [
    'modeltranslation',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'main',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.middleware.gzip.GZipMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.locale.LocaleMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'core.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [BASE_DIR / 'templates'],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
                'main.context_processors.admin_dashboard_stats',
            ],
        },
    },
]

WSGI_APPLICATION = 'core.wsgi.application'

if config("USE_SQLITE", default=True, cast=bool):
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.sqlite3',
            'NAME': BASE_DIR / 'db.sqlite3',
        }
    }
else:
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql',
            'NAME': config("POSTGRES_DB", default="portfolio_v2"),
            'USER': config("POSTGRES_USER", default="postgres"),
            'PASSWORD': config("POSTGRES_PASSWORD", default="postgres"),
            'HOST': config("DB_HOST", default="localhost"),
            'PORT': config("DB_PORT", default="5432"),
        }
    }

AUTH_PASSWORD_VALIDATORS = [
    {'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator'},
    {'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator'},
    {'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator'},
    {'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator'},
]

from django.utils.translation import gettext_lazy as _

LANGUAGES = (
    ('en', _('English')),
    ('uz', _("O'zbekcha")),
    ('ru', _('Русский')),
)

LANGUAGE_CODE = 'en'
TIME_ZONE = 'Asia/Tashkent'
USE_I18N = True
USE_TZ = True

MODELTRANSLATION_DEFAULT_LANGUAGE = 'en'
MODELTRANSLATION_LANGUAGES = ('en', 'uz', 'ru')
MODELTRANSLATION_FALLBACK_LANGUAGES = ('en', 'uz')

STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
STATICFILES_DIRS = [
    BASE_DIR / 'static',
]
WHITENOISE_MAX_AGE = 31536000  # 1 year caching for immutable static assets

MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
SESSION_COOKIE_AGE = 86400
SESSION_SAVE_EVERY_REQUEST = True

# Kesh sozlamalari (Rate limiting va boshqa kesh operatsiyalari uchun)
# Productionda ko'p workerli muhitda DatabaseCache yoki RedisCache tavsiya etiladi.
CACHES = {
    'default': {
        'BACKEND': config(
            'CACHE_BACKEND',
            default='django.core.cache.backends.locmem.LocMemCache'
        ),
        'LOCATION': config('CACHE_LOCATION', default='portfolio_v2_cache'),
    }
}

# Logging konfiguratsiyasi (barcha xatoliklar konsolga standart formatda chiqadi)
LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'formatters': {
        'verbose': {
            'format': '[{asctime}] {levelname} [{name}:{lineno}] {message}',
            'style': '{',
        },
        'simple': {
            'format': '{levelname} {message}',
            'style': '{',
        },
    },
    'handlers': {
        'console': {
            'class': 'logging.StreamHandler',
            'formatter': 'verbose',
        },
    },
    'root': {
        'handlers': ['console'],
        'level': 'WARNING',
    },
    'loggers': {
        'django': {
            'handlers': ['console'],
            'level': 'INFO',
            'propagate': False,
        },
        'main': {
            'handlers': ['console'],
            'level': 'INFO',
            'propagate': False,
        },
    },
}
