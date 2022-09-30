# Generated by Django 4.1.1 on 2022-09-23 23:26

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="HousingInfo",
            fields=[
                ("HousingId", models.BigAutoField(primary_key=True, serialize=False)),
                ("HousingName", models.CharField(max_length=500)),
                ("HousingType", models.CharField(max_length=2)),
                ("ImageFileName", models.CharField(max_length=500)),
            ],
        ),
    ]
