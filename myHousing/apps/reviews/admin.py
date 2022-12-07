from django.contrib import admin
from .models import Reviews


class ReviewAdmin(admin.ModelAdmin):
    """Registering Review model on the admin site"""

    list_display = ("review_id", "title", "body", "stars")


admin.site.register(Reviews, ReviewAdmin)
