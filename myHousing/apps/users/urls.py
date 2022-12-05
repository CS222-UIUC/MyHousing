from knox import views as knox_views
from django.urls import path

from .views import RegisterAPI, LoginAPI, UserList, UserDetail, UserAPI

urlpatterns = [
    path("register/", RegisterAPI.as_view(), name="register"),
    path("login/", LoginAPI.as_view(), name="login"),
    path("logout/", knox_views.LogoutView.as_view(), name="logout"),
    path("logoutall/", knox_views.LogoutAllView.as_view(), name="logoutall"),
    path("user/", UserAPI.as_view(), name="user"),
    path("users/", UserList.as_view(), name="user_list"),
    path("users/<int:pk>/", UserDetail.as_view(), name="user_detail"),
]
