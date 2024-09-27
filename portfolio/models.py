from django.db import models

# Create your models here.
class Frontendservices(models.Model):
    title = models.CharField(max_length=100)
    desc = models.TextField()
    image = models.ImageField(upload_to='image')

    def __str__(self) -> str:
        return self.title
    
class BackendServices(models.Model):
    title = models.CharField(max_length=100)
    desc = models.TextField()
    image = models.ImageField(upload_to='image')

    def __str__(self) -> str:
        return self.title
    
class uiuxservices(models.Model):
    title = models.CharField(max_length=100)
    desc = models.TextField()
    image = models.ImageField(upload_to='image')

    def __str__(self) -> str:
        return self.title
    
class Visiter(models.Model):
    first_name=models.CharField(max_length=50)
    last_name=models.CharField(max_length=50)
    email=models.EmailField()
    subject=models.CharField(max_length=20)
    message=models.TextField()