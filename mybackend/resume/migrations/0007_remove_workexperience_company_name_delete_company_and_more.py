# Generated by Django 5.0.1 on 2024-01-03 20:55

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('resume', '0006_rename_company_workexperience_company_name'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='workexperience',
            name='company_name',
        ),
        migrations.DeleteModel(
            name='Company',
        ),
        migrations.DeleteModel(
            name='WorkExperience',
        ),
    ]
