# Generated by Django 5.0.1 on 2024-01-03 20:56

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('resume', '0007_remove_workexperience_company_name_delete_company_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Company',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('company_name', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='WorkExperience',
            fields=[
                ('experience_id', models.AutoField(primary_key=True, serialize=False)),
                ('position', models.CharField(max_length=255)),
                ('start_date', models.DateField()),
                ('end_date', models.DateField(blank=True, null=True)),
                ('responsbilities', models.TextField()),
                ('achievements', models.TextField(blank=True, null=True)),
                ('company_name', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='resume.company')),
            ],
        ),
    ]
