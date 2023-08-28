from django.db import models

class Task( models.Model ):

    task_title = models.CharField( max_length=100, null=False, verbose_name='Task Name' )
    task_description = models.TextField( null=True, verbose_name='Task Description' )
    task_done = models.BooleanField( default=False )

    def __str__(self) -> str:
        return f'{ self.task_title }'
    
    class Meta():
        verbose_name = 'Task'
        verbose_name_plural = 'Tasks'
        db_table = 'Task'
        ordering = ['id']
