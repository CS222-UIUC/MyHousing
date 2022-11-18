from rest_framework import serializers

from .models import HousingInfo


class HousingInfoSerializer(serializers.ModelSerializer):
    image_filename = serializers.ImageField(required=False)

    class Meta:
        model = HousingInfo
        fields = (
            "housing_id",
            "housing_name",
            "housing_types",
            "housing_price",
            "street_address",
            "street_address_two",
            "city",
            "state",
            "country",
            "zip",
            "housing_description",
            "image_filename",
        )


# get all reviews with housing info '/housinginfo/id/reviews'
