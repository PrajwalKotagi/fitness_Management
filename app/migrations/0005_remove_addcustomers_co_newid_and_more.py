# Generated by Django 4.0.5 on 2022-07-26 09:55

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0004_addcustomers_delete_addcoordinator_delete_addevent_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='addcustomers',
            name='co_newid',
        ),
        migrations.RemoveField(
            model_name='addcustomers',
            name='co_wait',
        ),
    ]
