from django.shortcuts import render
from django.core import serializers
from django.http import HttpResponse, JsonResponse
import json

from reviews.models import Reviews
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def index(request):
    if request.method == 'GET':
        allReviews = list(Reviews.objects.values())
        res = JsonResponse(allReviews, safe=False)
        return res
    elif request.method == 'POST':
        try:
            obj = json.loads(request.body)
            print(obj)
            newReview = Reviews(
                full_name=obj['full_name'],
                title=obj['title'],
                description=obj['description'],
                datetime=obj['datetime']
            )
        except(KeyError):
            res = HttpResponse("Not all required fields were provided", status=400)
            return res
        else:
            newReview.save()
            return HttpResponse(status=201)
# Create your views here.
