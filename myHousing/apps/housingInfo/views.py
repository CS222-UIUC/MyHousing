from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response

from .serializers import HousingInfoSerializer
from .models import HousingInfo
from apps.reviews.models import Reviews
from apps.reviews.views import ReviewsSerializer
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.decorators import login_required


class HousingInfoViewSet(viewsets.ModelViewSet):
    # permission_classes = (IsAuthenticated,)
    queryset = HousingInfo.objects.all()
    serializer_class = HousingInfoSerializer


class ReviewsViewSet(viewsets.ViewSet):
    # permission_classes = (IsAuthenticated,)
    def list(self, request, housinginfo_pk):
        queryset = Reviews.objects.filter(housing_info=housinginfo_pk)
        serializer = ReviewsSerializer(queryset, many=True)
        return Response(serializer.data)
