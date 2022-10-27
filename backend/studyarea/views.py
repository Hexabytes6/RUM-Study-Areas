from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .serializers import StudyAreaSerializer, ReviewSerializer
from .models import StudyArea, Review


class StudyAreaView(viewsets.ModelViewSet):
    serializer_class = StudyAreaSerializer
    queryset = StudyArea.objects.all()


class ReviewView(viewsets.ModelViewSet):
    serializer_class = ReviewSerializer
    queryset = Review.objects.all()
