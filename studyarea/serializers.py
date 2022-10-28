from rest_framework import serializers
from .models import StudyArea, Review, Profile


class StudyAreaSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudyArea
        fields = ('name', 'room_id', 'building', 'features', 'completed')


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ('review_id', 'creator', 'title', 'description', 'rating')


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('username', 'password', 'email', 'display_first_name', 'display_last_name')
