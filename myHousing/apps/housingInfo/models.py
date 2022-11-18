from email.policy import default
from django.contrib.postgres.fields import ArrayField
from django.db import models
from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _


def upload_to(instance, filename):
    return "images/{filename}".format(filename=filename)


def validate_zipcode(value):
    if value < 10000 or value > 99999:
        raise ValidationError(
            _("%(value)s is not a valid zipcode!"),
            params={"value": value},
        )


HOUSING_CHOICES = (
    ("1B", "1 Bedroom"),
    ("2B", "2 Bedroom"),
    ("3B", "3 Bedroom"),
    ("4B", "4 Bedroom"),
    ("5B", "5 or More Bedroom"),
    ("1S", "Studio"),
)


class HousingInfo(models.Model):
    housing_id = models.BigAutoField(primary_key=True)
    housing_name = models.CharField(max_length=500, default="")

    housing_types = ArrayField(
        models.CharField(max_length=2, choices=HOUSING_CHOICES, blank=True, null=True),
        blank=True,
        null=True,
    )  # Array of available housing_choices
    housing_price = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    street_address = models.CharField(max_length=100, null=True, blank=True)
    street_address_two = models.CharField(max_length=100, null=True, blank=True)
    city = models.CharField(max_length=100, default="Champaign")
    state = models.CharField(max_length=100, default="Illinois")
    # country will be default to US
    country = models.CharField(max_length=50, default="United States")
    zip = models.IntegerField(validators=[validate_zipcode], null=True, blank=True)

    housing_description = models.CharField(
        max_length=5000, default="This is where the description goes!"
    )
    # housing_reviews = ArrayField(models.ForeignKey)

    image_filename = models.ImageField(null=True, blank=True, upload_to=upload_to)
    # base 64 encoding
    # multipart

    def __str__(self) -> str:
        return self.housing_name
