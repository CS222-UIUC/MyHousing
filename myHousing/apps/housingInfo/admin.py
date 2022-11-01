from django.contrib import admin
from .models import HousingInfo, Address

# Register your models here.
class HousingInfoAdmin(admin.ModelAdmin):
    list_display =  ("housing_id", "housing_name", "housing_types", "housing_price", "housing_location", "image_filename")
    list_display_links = ["housing_location"]

class AddressAdmin(admin.ModelAdmin):
    list_display = [
        "street_address",
        "street_address_two",
        "city",
        "state",
        "country",
        "zip"
    ]

admin.site.register(HousingInfo, HousingInfoAdmin)
admin.site.register(Address, AddressAdmin)