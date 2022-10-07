from django.contrib.postgres.fields import ArrayField
from django.db import models
from apps.reviews.models import Reviews


class HousingInfo(models.Model):
    HousingId = models.BigAutoField(primary_key=True)
    HousingName = models.CharField(max_length=500)

    HOUSING_TYPE_CHOICES = []
    HousingType = models.CharField(max_length=2)

    ImageFileName = models.CharField(max_length=500)

    def __str__(self) -> str:
        return self.HousingName

    # HousingReviews will be an array of ReviewsId
    # HousingReviews = ArrayField(
    #     models.ForeignKey(Reviews, on_delete=models.CASCADE)
    # )
