from django.db import models
from django.core.validators import *
from apps.housingInfo.models import HousingInfo
from apps.users.models import User

# Create your models here.
class Reviews(models.Model):
    review_id = models.BigAutoField(primary_key=True)
    housing_info = models.ForeignKey(HousingInfo, on_delete=models.CASCADE)
    # user_id = models.ForeignKey(User, on_delete=models.CASCADE, default=0)

    title = models.CharField(
        max_length=50,
        default="Insert Your Title Here.",
    )
    body = models.TextField(
        max_length=200,
        default="Insert Your Text Here.",
    )
    stars = models.IntegerField(
        default=1, validators=[MinValueValidator(1), MaxValueValidator(5)]
    )

    def __str__(self) -> str:
        return self.title
