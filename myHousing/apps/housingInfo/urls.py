from django.urls import path, include
from rest_framework import routers
from .views import HousingInfoViewSet

router = routers.DefaultRouter()
router.register(r"", HousingInfoViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
