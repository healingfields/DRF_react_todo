from django.http import request
from django.shortcuts import render
from rest_framework import generics

from todos.models import Task
from todos.serializers import TaskSerializer


# Create your views here.
class Task_list_view(generics.ListAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

class Task_detail_view(generics.RetrieveAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
