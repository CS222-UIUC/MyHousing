# Generated by Django 4.1.1 on 2022-10-21 19:57

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ("reviews", "0004_remove_reviews_user_id"),
    ]

    operations = [
        migrations.AddField(
            model_name="reviews",
            name="owner",
            field=models.ForeignKey(
                default=1,
                on_delete=django.db.models.deletion.CASCADE,
                related_name="reviews",
                to=settings.AUTH_USER_MODEL,
            ),
            preserve_default=False,
        ),
    ]
