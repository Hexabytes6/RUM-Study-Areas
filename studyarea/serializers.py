from rest_framework import serializers
from .models import StudyArea, Review, Profile, Schedule


class ScheduleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Schedule
        fields = ('day', 'study_area', 'time_start', 'time_end')


class StudyAreaSerializer(serializers.ModelSerializer):
    schedules = serializers.StringRelatedField(many=True, read_only=True)
    reviews = serializers.StringRelatedField(many=True, read_only=True)

    class Meta:
        model = StudyArea
        fields = ('room_id', 'building', 'features', 'schedules', 'reviews', 'completed')


class ReviewSerializer(serializers.ModelSerializer):

    class Meta:
        model = Review
        fields = ('review_id', 'study_area', 'creator', 'title', 'description', 'rating')


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('username', 'password', 'email', 'display_first_name', 'display_last_name')
