# Generated by Django 4.1.1 on 2022-09-23 23:26

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Reviews",
            fields=[
                ("ReviewId", models.BigAutoField(primary_key=True, serialize=False)),
                ("Title", models.CharField(max_length=150)),
                ("Body", models.TextField()),
                (
                    "Stars",
                    models.IntegerField(
                        validators=[
                            django.core.validators.MinValueValidator(1),
                            django.core.validators.MaxValueValidator(5),
                        ]
                    ),
                ),
            ],
        ),
    ]
