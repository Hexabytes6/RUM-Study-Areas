# Generated by Django 4.1.2 on 2022-11-30 01:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('studyarea', '0002_alter_studyarea_room_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='studyarea',
            name='features',
            field=models.CharField(blank=True, choices=[('AC', 'Air Conditioner'), ('PC', 'Computers'), ('WB', 'Whiteboard'), ('NONE', 'None')], default='None', max_length=20),
        ),
    ]
