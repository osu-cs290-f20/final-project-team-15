from django.db import models

# Create your models here.
class Reviews(models.Model):
    full_name = models.CharField(max_length=200)
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=200)
    datetime = models.CharField(max_length=200)
    
