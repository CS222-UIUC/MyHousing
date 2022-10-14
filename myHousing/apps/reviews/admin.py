from django.contrib import admin
from .models import Reviews

# Register your models here.
class ReviewAdmin(admin.ModelAdmin):
    list_display = ("review_id", "title" , "body", "stars")


admin.site.register(Reviews, ReviewAdmin)