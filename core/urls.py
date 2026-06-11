"""
URL configuration for core project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import RedirectView
from django.http import HttpResponse
from main.views import home_view


def robots_txt(request):
    content = """User-agent: *
Allow: /
Sitemap: https://khasanoff.uz/sitemap.xml
"""
    return HttpResponse(content, content_type="text/plain")


def yandex_verification(request):
    file_path = settings.BASE_DIR / 'yandex_cb88068b0f682954.html'
    with open(file_path, encoding='utf-8') as f:
        return HttpResponse(f.read(), content_type='text/html; charset=UTF-8')


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home_view, name='home'),
    path('robots.txt', robots_txt, name='robots_txt'),
    path('yandex_cb88068b0f682954.html', yandex_verification, name='yandex_verification'),
    path('favicon.ico', RedirectView.as_view(url=settings.STATIC_URL + 'favicon.ico', permanent=True)),
]

# Serve static files during development
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATICFILES_DIRS[0])
