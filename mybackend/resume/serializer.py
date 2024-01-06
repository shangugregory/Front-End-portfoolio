from rest_framework import serializers
from . models import *

class EducSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = ('education_id', 'institution_name', 'year_joined', 'year_Ended', 'grade_attained', 'certificate_earned',)

class WorkSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkExperience
        fields = ('experience_id', 'company_name', 'position', 'start_date', 'end_date', 'responsbilities', 'achievements')

        