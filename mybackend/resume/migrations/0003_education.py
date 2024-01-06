# Generated by Django 5.0.1 on 2024-01-03 18:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('resume', '0002_delete_education_delete_institution'),
    ]

    operations = [
        migrations.CreateModel(
            name='Education',
            fields=[
                ('education_id', models.AutoField(primary_key=True, serialize=False)),
                ('institution_name', models.CharField(max_length=255)),
                ('year_joined', models.IntegerField()),
                ('year_Ended', models.IntegerField()),
                ('grade_attained', models.CharField(max_length=55)),
                ('certificate_earned', models.CharField(max_length=255)),
            ],
        ),
    ]
