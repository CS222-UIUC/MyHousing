from django.contrib import admin
from .models import HousingInfo

# Register your models here.
class HousingInfoAdmin(admin.ModelAdmin):
    list_display =  ("housing_id", "housing_name", "housing_types", "housing_price", "housing_location", "image_filename")


admin.site.register(HousingInfo, HousingInfoAdmin)