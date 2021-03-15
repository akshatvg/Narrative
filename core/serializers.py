from rest_framework import serializers
from .models import TemplateDatabase, TemplateDivision


class DivisionSerailizer(serializers.ModelSerializer):
    class Meta:
        model = TemplateDivision
        fields = '__all__'


class DatabaseSerailizer(serializers.ModelSerializer):
    class Meta:
        model = TemplateDatabase
        fields = '__all__'