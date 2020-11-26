from django.shortcuts import render
from django.core import serializers
from django.http import HttpResponse, JsonResponse
import json

from harvester.models import UserData
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def index(request):
    if request.method == 'GET':
        allUserData = list(UserData.objects.values())
        res = JsonResponse(allUserData, safe=False)
        return res
    elif request.method == 'POST':
        try:
            obj = json.loads(request.body)
            print(obj)
            newUser = UserData(
                first_name=obj['first_name'],
                last_name=obj['last_name'],
                age=obj['age']
            )
        except(KeyError):
            res = HttpResponse("Not all required fields were provided", status=400)
            return res
        else:
            newUser.save()
            return HttpResponse(status=201)
        

# Create your views here.
