# Generated by Django 4.0.5 on 2022-07-25 18:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='adminmaster',
            name='ad_createId',
        ),
        migrations.AddField(
            model_name='adminmaster',
            name='ad_role',
            field=models.CharField(default='', max_length=100),
        ),
    ]