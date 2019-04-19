from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from api.views import user

urlpatterns = [
    path('admin/', admin.site.urls),
    path('user/', user),
    re_path('', TemplateView.as_view(template_name='index.html')),
]
