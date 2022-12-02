from django.contrib import admin
from .models import HousingInfo

# Register your models here.
class HousingInfoAdmin(admin.ModelAdmin):
    list_display = (
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
        "image_filename",
    )


admin.site.register(HousingInfo, HousingInfoAdmin)
