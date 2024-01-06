from rest_framework.response import Response
from rest_framework.decorators import api_view
from . serializer import *
from . models import *

@api_view(['GET'])
def EducationFetch(request):
    my_education = Education.objects.all()
    serializer = EducSerializer(my_education, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def WorkFetch(request):
    mywork = WorkExperience.objects.all()
    serializer = WorkSerializer(mywork, many = True)
    return Response(serializer.data)
