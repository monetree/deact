from django.shortcuts import render
from django.http import JsonResponse
from .models import User

def user(request):
    res = list(User.objects.values())
    return JsonResponse(res, safe=False)