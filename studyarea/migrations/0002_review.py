# Generated by Django 4.1.2 on 2022-10-27 09:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('studyarea', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Review',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('review_id', models.IntegerField()),
                ('creator', models.CharField(max_length=30)),
                ('title', models.CharField(max_length=50)),
                ('description', models.CharField(max_length=500)),
                ('rating', models.IntegerField()),
            ],
        ),
    ]