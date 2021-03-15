from django.contrib import admin
from django.urls import path
from core import views as core
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('divisions/', core.ListDivisions.as_view()),
    path('templates/', core.ListTemplateImages.as_view()),
    path('apply/filter/', core.ApplyFilter.as_view()),
]

if bool(settings.DEBUG):
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
