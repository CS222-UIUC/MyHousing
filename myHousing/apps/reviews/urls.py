from django.urls import include, path

from rest_framework import routers

from .views import ReviewsViewSet

router = routers.DefaultRouter()
router.register(r"", ReviewsViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
