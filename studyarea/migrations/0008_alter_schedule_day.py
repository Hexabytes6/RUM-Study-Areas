# Generated by Django 4.1.3 on 2022-11-30 04:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('studyarea', '0007_alter_studyarea_features'),
    ]

    operations = [
        migrations.AlterField(
            model_name='schedule',
            name='day',
            field=models.CharField(max_length=100),
        ),
    ]