from django.db import models

class Project(models.Model):
    img1 = models.URLField(max_length=200)
    img2 = models.URLField(max_length=200)
    img3 = models.URLField(max_length=200)
    title = models.CharField(max_length=100)
    subtitle = models.CharField(max_length=200)
    liveLink = models.URLField(max_length=200)
    gitLink = models.URLField(max_length=200)

