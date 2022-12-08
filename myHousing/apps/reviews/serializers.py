from apps.housingInfo.models import HousingInfo
from rest_framework import serializers

from .models import Reviews


class ReviewsSerializer(serializers.ModelSerializer):
    """Serializer for Review model, used to display certain fields"""

    owner = serializers.ReadOnlyField(
        source="owner.username"
    )  # Save the author of the review

    class Meta:
        model = Reviews
        fields = (
            "review_id",
            "housing_info",
            "is_currently_resident",
            "owner",
            "title",
            "body",
            "stars",
        )
