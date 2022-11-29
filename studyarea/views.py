from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets, status
from .serializers import StudyAreaSerializer, ReviewSerializer, ProfileSerializer, ScheduleSerializer
from .models import StudyArea, Review, Profile, Schedule

from rest_framework.response import Response
from rest_framework.decorators import action


class StudyAreaView(viewsets.ModelViewSet):
    serializer_class = StudyAreaSerializer
    queryset = StudyArea.objects.all()


class ReviewView(viewsets.ModelViewSet):
    serializer_class = ReviewSerializer
    queryset = Review.objects.all()


class ProfileView(viewsets.ModelViewSet):
    serializer_class = ProfileSerializer
    queryset = Profile.objects.all()


class ScheduleView(viewsets.ModelViewSet):
    serializer_class = ScheduleSerializer
    queryset = Schedule.objects.all()

