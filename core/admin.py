from django.contrib import admin

# Register your models here.
from .models import TemplateDivision, TemplateDatabase

admin.site.register(TemplateDivision)
admin.site.register(TemplateDatabase)