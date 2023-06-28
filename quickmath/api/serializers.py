from rest_framework import serializers
from .models import Numbers

class NumbersSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Numbers
        fields = ('firstNumber', 'secondNumber', 'mathType', 'answer')

class CreateNumbersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Numbers
        fields = ('firstNumber', 'secondNumber', 'mathType')