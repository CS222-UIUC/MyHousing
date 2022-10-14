from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response

from .serializers import HousingInfoSerializer
from .models import HousingInfo
from apps.reviews.models import Reviews
from apps.reviews.views import ReviewsSerializer


class HousingInfoViewSet(viewsets.ModelViewSet):
    queryset = HousingInfo.objects.all()
    serializer_class = HousingInfoSerializer


class ReviewsViewSet(viewsets.ViewSet):
    def list(self, request, housinginfo_pk):
        queryset = Reviews.objects.filter(housing_info=housinginfo_pk)
        serializer = ReviewsSerializer(queryset, many=True)
        return Response(serializer.data)
