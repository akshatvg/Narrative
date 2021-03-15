from django.db import models
import uuid


class TemplateDivision(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    division_name = models.CharField(max_length=100)


class TemplateDatabase(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    division = models.ForeignKey(TemplateDivision, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    image = models.CharField(max_length=1000)
