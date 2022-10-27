from django.contrib import admin
from .models import StudyArea, Review


class StudyAreaAdmin(admin.ModelAdmin):
    list_display = ('name', 'room_id', 'building', 'features', 'completed')


class ReviewAdmin(admin.ModelAdmin):
    list_display = ('review_id', 'creator', 'title', 'description', 'rating')


# Register your models here.
admin.site.register(StudyArea, StudyAreaAdmin)
admin.site.register(Review, ReviewAdmin)
