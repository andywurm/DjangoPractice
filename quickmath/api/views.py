from django.shortcuts import render
from rest_framework import generics, status
from .serializers import NumbersSerializer, CreateNumbersSerializer
from .models import Numbers
from rest_framework.views import APIView
from rest_framework.views import Response

# Create your views here.
class NumbersView(generics.CreateAPIView):
    queryset = Numbers.objects.all()
    serializer_class = NumbersSerializer

class CreateNumbersView(APIView):
    serializer_class = CreateNumbersSerializer
    
    def post(self, request, format=None):

        serializer = self.serializer_class(data=request.data)
        
        if serializer.is_valid():
            firstNumber = serializer.data.get('firstNumber')
            secondNumber = serializer.data.get('secondNumber')
            mathType = serializer.data.get('mathType')
            
            
            def doMath(num1, num2, type):
                ans = 0
                if(type == "Add"):
                    ans = num1 + num2
                if(type == "Subtract"):
                    ans = num1 - num2
                if(type == "Multiply"):
                    ans = num1 * num2
                if(type == "Divide"):
                    ans = num1 / num2
                return ans

            numbers = Numbers(firstNumber=firstNumber, secondNumber=secondNumber, mathType=mathType, answer=doMath(firstNumber,secondNumber,mathType))
            numbers.save()

        return Response(NumbersSerializer(numbers).data, status=status.HTTP_201_CREATED)

