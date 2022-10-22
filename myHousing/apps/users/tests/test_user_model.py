"""
Test for user model.
"""

from django.test import TestCase
from django.contrib.auth import get_user_model

class ModelTests(TestCase):
    # test models

    def test_create_user_with_email_successful(self):
        # test creating a user with an email that is successful.
        email = "testingtesting@example.com" # example.com is the domain for testing email-related functions
        password = "icantthinkofpassword"
        user = get_user_model().objects.create_user(
            email=email,
            password=password,
        )

        self.assertEqual(user.email, email)
        self.assertTrue(user.check_password(password))

    def test_user_normalized(self):
        # check that the new user's email is normalized
        sample_emails = [
            ["testingtesting@EXAMPLE.com", "testingtesting@example.com"],
            ["Test@Example.com", "Test@example.com"],
            ["bruhBruh@example.com", "bruhBruh@example.com"],
            # ["justin@example.COM", "justin@example.com"],
            ["john@EXAMPLE.COM", "john@example.com"]
        ]
        for email, expected in sample_emails:
            user = get_user_model().objects.create_user(
                email=email,
                password="notTestingPassword"
            )
            self.assertEqual(user.email, expected)

    def test_require_email(self):
        # test to make sure that the user without an email raises a ValueError.
        with self.assertRaises(ValueError):
            get_user_model().objects.create_user("", "test1223")