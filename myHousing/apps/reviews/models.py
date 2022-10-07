from django.db import models
from django.core.validators import *

# Create your models here.
class Reviews(models.Model):
    review_id = models.BigAutoField(primary_key=True)
    # HousingId = models.ForeignKey(Housing)
    # UserId = models.ForeignKey(User)
    title = models.CharField(max_length=50, default="Insert Your Title Here.", editable=False)
    body = models.TextField(max_length=200, default="Insert Your Text Here.", editable=False)
    stars = models.IntegerField(default=1, validators=[MinValueValidator(1), MaxValueValidator(5)])
