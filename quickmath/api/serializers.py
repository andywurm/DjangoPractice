from rest_framework import serializers
from .models import Numbers

class NumbersSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Numbers
        fields = ('id', 'firstNumber', 'secondNumber', 'mathType', 'answer')