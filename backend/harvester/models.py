from django.db import models

# Create your models here.
class UserData(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    phone_number = models.CharField(max_length=200)
    blood_type = models.CharField(max_length=200)
    credit_card = models.CharField(max_length=200)
    gender = models.CharField(max_length=200)
    race = models.CharField(max_length=200)
    age = models.IntegerField()
