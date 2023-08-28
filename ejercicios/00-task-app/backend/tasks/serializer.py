from rest_framework import serializers
from .models import Task

class TaskSerializer( serializers.ModelSerializer ):
    class Meta:
        #fields: tuple = ( 'id', 'task_title', 'task_description', 'task_done' )
        model = Task
        fields = '__all__'
        