# Generated by Django 4.0.5 on 2022-07-27 08:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0011_alter_adminmaster_ad_status'),
    ]

    operations = [
        migrations.AddField(
            model_name='addplan',
            name='ae_month',
            field=models.CharField(default='', max_length=100),
        ),
    ]