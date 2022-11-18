from django.shortcuts import render
from rest_framework import viewsets

from .serializers import ReviewsSerializer
from .models import Reviews
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from config.permissions import IsOwnerOrReadOnly


class ReviewsViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly)
    queryset = Reviews.objects.all()
    serializer_class = ReviewsSerializer

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
