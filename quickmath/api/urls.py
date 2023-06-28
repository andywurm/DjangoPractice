from django.urls import path
from .views import CreateNumbersView, NumbersView

urlpatterns = [
    path('', NumbersView.as_view()),
    path('create-nums', CreateNumbersView.as_view())
]