from django.shortcuts import render,redirect
from .models import*
from django.core.mail import send_mail
from django.template.loader import render_to_string
from django.contrib import messages
from datetime import datetime
# Create your views here.
date=datetime.now().year
def index(request):
     return render(request,'index.html',{'date':date})
def about(request):
     return render(request,"about.html",{'date':date})
def services(request):
     return render(request,"services.html",{'date':date})
def portfolio(request):
     data = Frontendservices.objects.all()
     backenddata = BackendServices.objects.all()
     uiuxdata = uiuxservices.objects.all()
     return render(request,"portfolio.html",{'date':date,'data':data,'backenddata':backenddata,'uiuxdata':uiuxdata})
def contact(request):
     if request.method=='POST':
        first_name=request.POST.get('first_name')
        last_name=request.POST.get('last_name')
        email=request.POST.get('email')
        subject=request.POST.get('subject')
        message=request.POST.get('message')
        Visiter.objects.create(first_name=first_name,last_name=last_name,email=email,subject=subject,message=message)

        subject="Nishan_portfolio"
        message=render_to_string('msg.html',{'first_name':first_name,'date':date})
        from_email='nishanads77@gmail.com'
        recipient_list=[email]
        send_mail(subject,message,from_email,recipient_list,fail_silently=False)
        messages.success(request,f"{first_name} successfully send your message check your mail!!!")
        return redirect("contact")

     return render(request,"contact.html",{'date':date})
def search_form(request):
     if request.method=='POST':
          search=request.POST['searched']
          finds=Frontendservices.objects.filter(title__icontains=search)
          Backend=BackendServices.objects.filter(title__icontains=search)
          uiux=uiuxservices.objects.filter(title__icontains=search)
     return render(request,"search.html",{'date':date,'finds':finds,'Backend':Backend,'uiux':uiux})
