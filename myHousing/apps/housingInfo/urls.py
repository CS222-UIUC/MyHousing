from django.urls import path, include
from rest_framework_nested import routers
from .views import HousingInfoViewSet, ReviewsViewSet

router = routers.DefaultRouter()
router.register(r"", HousingInfoViewSet)

reviews_router = routers.NestedSimpleRouter(router, r"", lookup="housinginfo")
reviews_router.register(r"reviews", ReviewsViewSet, basename="housinginfo_reviews")

urlpatterns = [
    path("", include(router.urls)),
    path("", include(reviews_router.urls)),
]
