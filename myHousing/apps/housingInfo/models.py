from email.policy import default
from django.contrib.postgres.fields import ArrayField
from django.db import models


def upload_to(instance, filename):
    return "images/{filename}".format(filename=filename)


class HousingInfo(models.Model):
    housing_id = models.BigAutoField(primary_key=True)
    housing_name = models.CharField(max_length=500, default="")

    HOUSING_TYPE_CHOICES = []
    housing_type = models.CharField(max_length=50)

    image_filename = models.ImageField(null=True, blank=True, upload_to=upload_to)
    # base 64 encoding
    # multipart

    def __str__(self) -> str:
        return self.housing_name
