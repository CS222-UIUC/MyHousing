from django.contrib.postgres.fields import ArrayField
from django.db import models
from apps.reviews.models import Reviews


class HousingInfo(models.Model):
    housing_id = models.BigAutoField(primary_key=True)
    housing_name = models.CharField(max_length=500, default="tem", editable=False)

    HOUSING_TYPE_CHOICES = []
    housing_type = models.CharField(max_length=50)

    image_filename = models.CharField(max_length=500)

    def __str__(self) -> str:
        return self.HousingName

    # HousingReviews will be an array of ReviewsId
    # HousingReviews = ArrayField(
        # models.ForeignKey(Reviews, on_delete=models.CASCADE)
    # )
