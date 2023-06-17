from django.urls import path
from .views import NumbersView

urlpatterns = [
    path('', NumbersView.as_view())
]