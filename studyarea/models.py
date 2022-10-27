from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator


# Create your models here.
class StudyArea(models.Model):
    objects = models.Manager()
    name = models.CharField(max_length=120)
    room_id = models.CharField(max_length=20)
    building = models.CharField(max_length=120)
    features = models.JSONField()  # DUMMY FIELD TODO IMPLEMENT A WAY TO READ FEATURES
    completed = models.BooleanField()

    def _str_(self):
        return self.name


class Review(models.Model):
    objects = models.Manager()
    review_id = models.IntegerField()
    creator = models.CharField(max_length=30)
    title = models.CharField(max_length=50)
    description = models.CharField(max_length=500)
    rating = models.IntegerField(default=1, validators=[MaxValueValidator(5), MinValueValidator(1)])

    def _str_(self):
        return self.name