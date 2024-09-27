from django.contrib import admin
from .models import*
# Register your models here.
@admin.register(Frontendservices)
class FrontendservicesAdmin(admin.ModelAdmin):
    list_display = ['id','title','desc','image']

@admin.register(BackendServices)
class BackendServicesAdmin(admin.ModelAdmin):
    list_display = ['id','title','desc','image']

@admin.register(uiuxservices)
class uiuxservicesAdmin(admin.ModelAdmin):
    list_display = ['id','title','desc','image']

@admin.register(Visiter)
class CustomerAdmin(admin.ModelAdmin):
    list_display=['id','first_name','last_name','email','subject','message']