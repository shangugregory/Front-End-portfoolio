# Generated by Django 5.0.1 on 2024-01-04 19:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('resume', '0009_alter_workexperience_company_name_delete_company'),
    ]

    operations = [
        migrations.AlterField(
            model_name='workexperience',
            name='responsbilities',
            field=models.JSONField(),
        ),
    ]
