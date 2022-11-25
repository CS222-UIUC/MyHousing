from apps.housingInfo.models import HousingInfo
from rest_framework import serializers

from .models import Reviews


class ReviewsSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source="owner.username")

    class Meta:
        model = Reviews
        fields = ("review_id", "housing_info", "owner", "title", "body", "stars")
