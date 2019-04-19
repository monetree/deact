from django.db import models

class User(models.Model):
    name = models.CharField(max_length=256)
    numb = models.IntegerField()

    def __str__(self):
        return self.name

