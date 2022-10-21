from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response

from .serializers import HousingInfoSerializer
from .models import HousingInfo
from apps.reviews.models import Reviews
from apps.reviews.views import ReviewsSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from config.permissions import IsOwnerOrReadOnly


class HousingInfoViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticatedOrReadOnly,)
    queryset = HousingInfo.objects.all()
    serializer_class = HousingInfoSerializer


class ReviewsViewSet(viewsets.ViewSet):
    permission_classes = (IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly)

    def list(self, request, housinginfo_pk):
        queryset = Reviews.objects.filter(housing_info=housinginfo_pk)
        serializer = ReviewsSerializer(queryset, many=True)
        return Response(serializer.data)
