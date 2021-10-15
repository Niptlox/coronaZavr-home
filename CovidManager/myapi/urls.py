from django.urls import path
from . import views

from django.urls import include, path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()

app_name = "myapi"
urlpatterns = [
    path('/', include(router.urls)),
    path('auth/', include('rest_framework.urls', namespace='rest_framework'))
]