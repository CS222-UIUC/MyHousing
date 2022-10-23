from rest_framework import serializers

from .models import HousingInfo


class HousingInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = HousingInfo
        fields = ("housing_id", "housing_name", "housing_type", "image_filename")


# get all reviews with housing info '/housinginfo/id/reviews'
