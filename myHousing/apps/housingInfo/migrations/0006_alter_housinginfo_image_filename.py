# Generated by Django 4.1.1 on 2022-10-24 21:11

import apps.housingInfo.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("housingInfo", "0005_alter_housinginfo_image_filename"),
    ]

    operations = [
        migrations.AlterField(
            model_name="housinginfo",
            name="image_filename",
            field=models.ImageField(
                blank=True, null=True, upload_to=apps.housingInfo.models.upload_to
            ),
        ),
    ]
