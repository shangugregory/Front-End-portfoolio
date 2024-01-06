from django.db import models
from jsonfield import JSONField

# Create your models here.


class Education(models.Model):
    education_id = models.AutoField(primary_key=True)
    institution_name = models.CharField(max_length=255)
    year_joined = models.IntegerField()
    year_Ended = models.IntegerField()
    grade_attained = models.CharField(max_length=55)
    certificate_earned= models.CharField(max_length=255)

    def __str__(self):
        return self.certificate_earned
    
#WORK EXPERIENCE MODEL
    

class WorkExperience(models.Model):
    experience_id = models.AutoField(primary_key=True)
    company_name = models.CharField(max_length= 255)
    position = models.CharField(max_length = 255)
    start_date = models.DateField()
    end_date = models.DateField(blank = True, null = True)
    responsbilities = models.JSONField()
    achievements = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.position
    
class Intrests(models.Model):
    intrests_id = models.AutoField(primary_key=True)
    intrests_name=models.CharField(max_length= 255, unique= True)
    intrests_description=models.TextField()

    def __str__(self):
        return self.intrests_name
    
class ProgrammingParadigm(models.Model):
    paradigm_id = models.AutoField(primary_key = True)
    paradigm_name = models.CharField(max_length=255, unique = True)

    def __str__(self):
        return self.paradigm_name

class ProgrammingLanguage(models.Model):
    language_id= models.AutoField(primary_key=True)
    programming_paradigm = models.ForeignKey(ProgrammingParadigm, on_delete = models.CASCADE)
    language_name= models.CharField(max_length=255)
    percentage_coverage = models.IntegerField()


    def __str__(self):
        return self.language_name