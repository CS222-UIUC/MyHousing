from django.shortcuts import render
from rest_framework import viewsets, serializers
from .models import HousingInfo


class HousingInfoSerializer(serializers.Serializer):
    class Meta:
        model = HousingInfo
        fields = ["housing_id", "housing_name", "housing_type", "image_filename"]


# Create your views here.
class HousingInfoViewSet(viewsets.ModelViewSet):
    queryset = HousingInfo.objects.all()
    serializer_class = HousingInfoSerializer
