from django.contrib import admin
from django.urls import path, re_path
from django.conf import settings
from django.conf.urls.static import static
from django.views.static import serve
import os

from main.views import portfolio_view, api_portfolio_data, api_contact

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', portfolio_view, name='home'),
    path('api/portfolio-data/', api_portfolio_data, name='api_portfolio_data'),
    path('api/contact/', api_contact, name='api_contact'),
    path('contact/', api_contact, name='contact'),
]

# Media fayllarga xizmat ko'rsatish (Nginx va lokal fallback uchun)
urlpatterns += [
    re_path(r'^media/(?P<path>.*)$', serve, {'document_root': settings.MEDIA_ROOT}),
]

# Statik fayllarga to'g'ridan-to'g'ri xizmat ko'rsatish (Nginx va lokal fallback uchun)
static_dir = settings.STATIC_ROOT if (hasattr(settings, 'STATIC_ROOT') and settings.STATIC_ROOT and os.path.exists(settings.STATIC_ROOT)) else settings.STATICFILES_DIRS[0]
urlpatterns += [
    re_path(r'^(?!(?:media|admin|api)/)(?P<path>.*\.(?:js|mjs|css|png|jpg|jpeg|webp|svg|gif|woff|woff2|ttf|ico|glb|gltf|mp4|webm|json))$', 
            serve, {'document_root': static_dir}),
    re_path(r'^(?P<path>(?:assets|Landing Page Assest|Project Images|admin|modeltranslation)/.*)$', 
            serve, {'document_root': static_dir}),
]
urlpatterns += static(settings.STATIC_URL, document_root=static_dir)
