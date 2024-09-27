from django.urls import path
from .views import *

urlpatterns = [
    path("",index,name="index"),
    path("about/",about,name="about"),
    path("services/",services,name="services"),
    path("portfolio/",portfolio,name="portfolio"),
    path("contact/",contact,name="contact"),
    path("search/",search_form,name="search_form")
]
