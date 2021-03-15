from core.serializers import DivisionSerailizer, DatabaseSerailizer
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework.generics import ListAPIView
from .models import TemplateDatabase, TemplateDivision
from .utils import Util
from django.conf import settings
import cv2
import os
from rest_framework.response import Response


class ListDivisions(ListAPIView):
    queryset = TemplateDivision.objects.all()
    serializer_class = DivisionSerailizer
    permission_classes = [AllowAny]


class ListTemplateImages(ListAPIView):
    serializer_class = DatabaseSerailizer
    permission_classes = [AllowAny]

    def get_queryset(self):
        return TemplateDatabase.objects.filter(
            division=self.request.query_params.get("id"))


class ApplyFilter(APIView):
    def post(self, request):
        if request.data.get("url") is None:
            return Response(status=404)
        filename = Util.preprocess(request.data.get("url"))
        image = Util.process(
            cv2.imread(os.path.join(settings.MEDIA_ROOT, filename)))
        cv2.imwrite(os.path.join(settings.MEDIA_ROOT, filename + ".png"),
                    image)
        os.remove(os.path.join(settings.MEDIA_ROOT, filename))
        return Response({"image": "/media/" + filename + ".png"})


# https://72a86818aed7.ngrok.io
