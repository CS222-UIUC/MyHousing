# """
# Django admin customization
# """

from django.contrib import admin
from .models import User


class UserAdmin(admin.ModelAdmin):
    list_display = ("email", "is_admin")


admin.site.register(User, UserAdmin)

# from django.contrib import admin
# from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
# from django.utils.translation import gettext_lazy as _

# from apps.users import models

# class UserAdmin(BaseUserAdmin):
#     """Define the admin pages for users."""
#     ordering = ["id"]
#     list_display = ["email", "name"]
#     fieldsets = (
#         (None, {"fields": ("email", "password")}),
#         (
#             _("Permissions"),
#                 {
#                 "fields": (
#                     "is_active",
#                     "is_staff",
#                 )
#             }
#         ),
#         (_("Important Dates"), {"fields": ("last_login",)})
#     )
#     readonly_fields = ["last_login"]
#     add_fieldsets = (
#         (None, {
#             "classes": ("wide",),
#             "fields": (
#                 "email",
#                 "password1",
#                 "password2",
#                 "name",
#                 "is_active",
#                 "is_staff",
#             )
#         }),
#     )

# admin.site.register(models.User, UserAdmin)
