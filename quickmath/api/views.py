from django.shortcuts import render
from rest_framework import generics
from .serializers import NumbersSerializer
from .models import Numbers

# Create your views here.
class NumbersView(generics.CreateAPIView):
    queryset = Numbers.objects.all()
    serializer_class = NumbersSerializer

