from django.shortcuts import render
from rest_framework import viewsets

from .serializers import ReviewsSerializer
from .models import Reviews
class ReviewsViewSet(viewsets.ModelViewSet):
    queryset = Reviews.objects.all()
    serializer_class = ReviewsSerializer

# Create your views here.
