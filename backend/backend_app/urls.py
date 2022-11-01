from django.urls import path


# APIs
from .views import upload_data
from .views import get_all_data

urlpatterns = [
    path('upload/', upload_data),
    path('view', get_all_data),
]
