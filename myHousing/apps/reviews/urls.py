from django.urls import include, path

from rest_framework import routers

from .views import ReviewsViewSet

app_name = "reviews"
router = routers.DefaultRouter()
router.register(r"", ReviewsViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
