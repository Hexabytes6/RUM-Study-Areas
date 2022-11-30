from random import randint

from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator, RegexValidator
from multiselectfield import MultiSelectField

features = (
    ('AC', 'Air Conditioner'),
    ('PC', 'Computers'),
    ('WB', 'Whiteboard'),
    ('NONE', 'None')
)


# Create your models here.

class StudyArea(models.Model):
    objects = models.Manager()
    room_id = models.CharField(max_length=20, primary_key=True, validators=[RegexValidator('[a-zA-Z]-\d\d\d')])
    building = models.CharField(max_length=120)
    features = MultiSelectField(choices=features, max_choices=3, max_length=300)
    completed = models.BooleanField()

    def __str__(self):
        return f'Room Name: {self.room_id}'


class Schedule(models.Model):
    objects = models.Manager()

    day = models.CharField(max_length=15)
    time_start = models.TimeField()
    time_end = models.TimeField()

    study_area = models.ForeignKey(StudyArea, null=True, on_delete=models.CASCADE, related_name='schedules')

    def __str__(self):
        return f'{self.day}, {self.time_start.__str__()} - {self.time_end.__str__()}'


def generate_id():
    return randint(10000, 99999)


class Review(models.Model):
    objects = models.Manager()
    review_id = models.BigAutoField(primary_key=True, unique=True, blank=True, default=generate_id)
    creator = models.CharField(max_length=30)
    title = models.CharField(max_length=50)
    description = models.CharField(max_length=500)
    rating = models.IntegerField(default=1, validators=[MaxValueValidator(5), MinValueValidator(1)])
    study_area = models.ForeignKey(StudyArea, null=True, on_delete=models.CASCADE, related_name='reviews')

    def __str__(self):
        return f'Review ID: {self.review_id}'


class Profile(models.Model):
    objects = models.Manager()
    username = models.CharField(max_length=12)
    password = models.CharField(max_length=32)
    email = models.EmailField(max_length=256)
    display_first_name = models.CharField(max_length=32)
    display_last_name = models.CharField(max_length=32)

    def _str_(self):
        return f"{self.username.__str__()}:{self.email}"
