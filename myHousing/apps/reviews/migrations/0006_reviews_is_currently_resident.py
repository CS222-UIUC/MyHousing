# Generated by Django 4.1.1 on 2022-11-11 03:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("reviews", "0005_reviews_owner"),
    ]

    operations = [
        migrations.AddField(
            model_name="reviews",
            name="is_currently_resident",
            field=models.BooleanField(default=0),
            preserve_default=False,
        ),
    ]
