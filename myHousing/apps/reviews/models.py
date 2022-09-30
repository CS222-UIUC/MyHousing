from django.db import models
from django.core.validators import *

# Create your models here.
class Reviews(models.Model):
    ReviewId = models.BigAutoField(primary_key=True)
    # HousingId = models.ForeignKey(Housing)
    # UserId = models.ForeignKey(User)
    Title = models.CharField(max_length=150)
    Body = models.TextField()
    Stars = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)])