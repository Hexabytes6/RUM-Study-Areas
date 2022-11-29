from django.contrib import admin
from .models import StudyArea, Review, Profile, Schedule


class StudyAreaAdmin(admin.ModelAdmin):
    list_display = ('room_id', 'building', 'features', 'completed')


class ReviewAdmin(admin.ModelAdmin):
    list_display = ('review_id', 'creator', 'title', 'description', 'rating')


class ProfileAdmin(admin.ModelAdmin):
    list_display = ('username', 'password', 'email', 'display_first_name', 'display_last_name')


class ScheduleAdmin(admin.ModelAdmin):
    list_display = ('day', 'study_area', 'time_start', 'time_end')


# Register your models here.
admin.site.register(StudyArea, StudyAreaAdmin)
admin.site.register(Review, ReviewAdmin)
admin.site.register(Profile, ProfileAdmin)
admin.site.register(Schedule, ScheduleAdmin)
