from django.shortcuts import render
from rest_framework import viewsets

from .serializers import ReviewsSerializer
from .models import Reviews
from rest_framework.permissions import IsAuthenticated


class ReviewsViewSet(viewsets.ModelViewSet):
    # permission_classes = (IsAuthenticated,)
    queryset = Reviews.objects.all()
    serializer_class = ReviewsSerializer
