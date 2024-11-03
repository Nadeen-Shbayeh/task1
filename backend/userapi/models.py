from django.db import models

class User(models.Model):
    name = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    phone = models.CharField(max_length=20)
    email = models.EmailField(unique=True)
    description = models.TextField()
    rating = models.FloatField()

    def __str__(self):
        return self.name
