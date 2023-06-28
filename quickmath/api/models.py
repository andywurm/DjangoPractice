from django.db import models

# Create your models here.
class Numbers(models.Model):
    firstNumber = models.IntegerField(null=False, default=0)
    secondNumber = models.IntegerField(null=False, default=0)
    mathType = models.CharField(max_length=10, default="", unique=False)
    answer = models.IntegerField(default=0)

    