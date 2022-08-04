# Generated by Django 4.0.5 on 2022-07-26 16:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0008_customers'),
    ]

    operations = [
        migrations.CreateModel(
            name='Health',
            fields=[
                ('ht_id', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('ht_name', models.CharField(max_length=100)),
                ('ht_date', models.CharField(max_length=100)),
                ('ht_bodyfat', models.CharField(max_length=100)),
                ('ht_water', models.CharField(max_length=100)),
                ('ht_muscle', models.CharField(max_length=100)),
                ('ht_calorie', models.CharField(max_length=100)),
                ('ht_bone', models.CharField(max_length=100)),
                ('ht_remarks', models.CharField(max_length=100)),
                ('ht_status', models.IntegerField(default=0)),
                ('ht_created_by', models.CharField(max_length=100)),
            ],
        ),
    ]
