from django.urls import path
from .views import register, get_profile_by_id,CheckEmailView

urlpatterns = [
    path('register/', register, name='register'),
    path('profile/<int:user_id>/', get_profile_by_id, name='get_profile_by_id'),
    path('check-email/<str:email>/', CheckEmailView.as_view(), name='check-email'),
]
