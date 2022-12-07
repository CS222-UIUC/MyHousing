from rest_framework import serializers

from .models import HousingInfo


class HousingInfoSerializer(serializers.ModelSerializer):
    """Serializer for HousingInfo model, used to display certain fields"""

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
