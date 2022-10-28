from django.contrib import admin
from .models import StudyArea, Review, Profile


class StudyAreaAdmin(admin.ModelAdmin):
    list_display = ('name', 'room_id', 'building', 'features', 'completed')


class ReviewAdmin(admin.ModelAdmin):
    list_display = ('review_id', 'creator', 'title', 'description', 'rating')


class ProfileAdmin(admin.ModelAdmin):
    list_display = ('username', 'password', 'email', 'display_first_name', 'display_last_name')


# Register your models here.
admin.site.register(StudyArea, StudyAreaAdmin)
admin.site.register(Review, ReviewAdmin)
admin.site.register(Profile, ProfileAdmin)
