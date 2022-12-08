from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from apps.reviews.models import Reviews
from apps.housingInfo.models import HousingInfo
from apps.users.models import User

# API tests for Reviews Model
class ReviewTests(APITestCase):
    def test_create_review_auth(self):
        """
        Ensure we can create a new Review object with the API if authenticated
        """
        url_register = reverse("register")
        url_housinginfo = reverse("housinginfo:housinginfo-list")
        url_reviews = reverse("reviews:reviews-list")

        register_data = {"email": "test@gmail.com", "password": "123456"}

        housinginfo_data = {
            "housing_name": "ISR",
            "housing_type": "Dorm",
            "housing_price": 999,
            "street_address": "Random Address",
            "city": "Chicago",
            "state": "IL",
            "zip": 60616,
            "housing_description": "Aparment description",
        }

        review_data = {
            "housing_info": 1,
            "title": "Testing Reviews",
            "body": "review_body",
            "is_currently_resident": False,
            "stars": 1,
        }

        files = {
            "file": (None, None),
        }

        response = self.client.post(url_register, register_data, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(User.objects.count(), 1)
        self.assertEqual(User.objects.get().email, "test@gmail.com")
        user = User.objects.get(email="test@gmail.com")
        self.client.force_authenticate(user=user)
        # self.client.credentials(HTTP_AUTHORIZATION="Token " + response.data["token"])  # Another way to authenticate

        response = self.client.post(url_housinginfo, housinginfo_data, files=files)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(HousingInfo.objects.count(), 1)
        self.assertEqual(HousingInfo.objects.get().housing_name, "ISR")

        response = self.client.post(url_reviews, review_data, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Reviews.objects.count(), 1)
        self.assertEqual(Reviews.objects.get().title, "Testing Reviews")
        self.assertEqual(len(response.data), 6)

    def test_create_review_unauth(self):
        """
        Ensure we cannot create a new Review object with the API if unauthenticated
        """
        url_housinginfo = reverse("housinginfo:housinginfo-list")
        url_reviews = reverse("reviews:reviews-list")

        housinginfo_data = {
            "housing_name": "ISR",
            "housing_type": "Dorm",
            "housing_price": 999,
            "street_address": "Random Address",
            "city": "Chicago",
            "state": "IL",
            "zip": 60616,
            "housing_description": "Aparment description",
        }

        review_data = {
            "housing_info": 1,
            "title": "Testing Reviews",
            "body": "review_body",
            "is_currently_resident": False,
            "stars": 1,
        }

        files = {
            "file": (None, None),
        }

        self.client.force_authenticate(user=None)

        response = self.client.post(url_housinginfo, housinginfo_data, files=files)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
        self.assertEqual(HousingInfo.objects.count(), 0)

        response = self.client.post(url_reviews, review_data, format="json")
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
        self.assertEqual(Reviews.objects.count(), 0)

    def test_read_review(self):
        """
        Ensure we can read API
        """
        url_housinginfo = reverse("housinginfo:housinginfo-list")
        url_reviews = reverse("reviews:reviews-list")

        self.client.force_authenticate(user=None)

        response = self.client.get(url_reviews)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(Reviews.objects.count(), 0)

    def test_update_review_auth(self):
        """
        Ensure we can update a new Review object with the API if authenticated
        """

        url_reviews_detail = reverse("reviews:reviews-detail", kwargs={"pk": 2})

        review_data_updated = {
            "title": "Testing Reviews Updated",
            "body": "review_body_updated",
            "stars": 1,
        }

        url_register = reverse("register")
        url_housinginfo = reverse("housinginfo:housinginfo-list")
        url_reviews = reverse("reviews:reviews-list")

        register_data = {"email": "test@gmail.com", "password": "123456"}

        housinginfo_data = {
            "housing_name": "ISR",
            "housing_type": "Dorm",
            "housing_price": 999,
            "street_address": "Random Address",
            "city": "Chicago",
            "state": "IL",
            "zip": 60616,
            "housing_description": "Aparment description",
        }

        review_data = {
            "housing_info": 2,
            "title": "Testing Reviews",
            "body": "review_body",
            "is_currently_resident": False,
            "stars": 1,
        }

        files = {
            "file": (None, None),
        }

        response = self.client.post(url_register, register_data, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(User.objects.count(), 1)
        self.assertEqual(User.objects.get().email, "test@gmail.com")
        user = User.objects.get(email="test@gmail.com")
        self.client.credentials(
            HTTP_AUTHORIZATION="Token " + response.data["token"]
        )  # Another way to authenticate

        response = self.client.post(url_housinginfo, housinginfo_data, files=files)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(HousingInfo.objects.count(), 1)
        self.assertEqual(HousingInfo.objects.get().housing_name, "ISR")

        response = self.client.post(url_reviews, review_data, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Reviews.objects.count(), 1)
        self.assertEqual(Reviews.objects.get().title, "Testing Reviews")
        self.assertEqual(len(response.data), 6)

        response = self.client.get(url_reviews_detail)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        response = self.client.patch(
            url_reviews_detail, review_data_updated, format="json"
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(Reviews.objects.count(), 1)
        self.assertEqual(Reviews.objects.get().title, "Testing Reviews Updated")
        self.assertEqual(len(response.data), 6)

    def test_update_review_unauth(self):
        """
        Ensure we can cannot update Review object with the API if unauthenticated
        """

        url_reviews_detail = reverse("reviews:reviews-detail", kwargs={"pk": 3})

        review_data_updated = {
            "title": "Testing Reviews Updated",
            "body": "review_body_updated",
            "stars": 1,
        }

        url_register = reverse("register")
        url_housinginfo = reverse("housinginfo:housinginfo-list")
        url_reviews = reverse("reviews:reviews-list")

        register_data = {"email": "test@gmail.com", "password": "123456"}

        housinginfo_data = {
            "housing_name": "ISR",
            "housing_type": "Dorm",
            "housing_price": 999,
            "street_address": "Random Address",
            "city": "Chicago",
            "state": "IL",
            "zip": 60616,
            "housing_description": "Aparment description",
        }

        review_data = {
            "housing_info": 3,
            "title": "Testing Reviews",
            "body": "review_body",
            "is_currently_resident": False,
            "stars": 1,
        }

        files = {
            "file": (None, None),
        }

        response = self.client.post(url_register, register_data, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(User.objects.count(), 1)
        self.assertEqual(User.objects.get().email, "test@gmail.com")
        user = User.objects.get(email="test@gmail.com")
        self.client.credentials(
            HTTP_AUTHORIZATION="Token " + response.data["token"]
        )  # Another way to authenticate

        response = self.client.post(url_housinginfo, housinginfo_data, files=files)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(HousingInfo.objects.count(), 1)
        self.assertEqual(HousingInfo.objects.get().housing_name, "ISR")

        response = self.client.post(url_reviews, review_data, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Reviews.objects.count(), 1)
        self.assertEqual(Reviews.objects.get().title, "Testing Reviews")
        self.assertEqual(len(response.data), 6)

        self.client.credentials()
        response = self.client.get(url_reviews_detail)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        response = self.client.patch(
            url_reviews_detail, review_data_updated, format="json"
        )
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
        self.assertEqual(Reviews.objects.count(), 1)
        self.assertEqual(Reviews.objects.get().title, "Testing Reviews")
