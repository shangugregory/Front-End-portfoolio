from django.urls import path
from .views import *

urlpatterns = [
    path("education", EducationFetch),
    path("work", WorkFetch)
]