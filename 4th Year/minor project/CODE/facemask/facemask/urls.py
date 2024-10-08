"""hpshop URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from facemask import views as mainView
from users import views as usr
from admins import views as admns
from django.contrib.staticfiles.urls import static
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.conf import settings
urlpatterns = [

    path('admin/', admin.site.urls),
    path('', mainView.index, name='index'),
    path('UserLogin/', mainView.UserLogin, name='UserLogin'),
    path('AdminLogin/', mainView.AdminLogin, name='AdminLogin'),
    path('UserRegister/', mainView.UserRegister, name='UserRegister'),
    path('logout/', mainView.logout, name='logout'),

    # User side views
    path('UserRegisterActions/', usr.UserRegisterActions,
         name='UserRegisterActions'),
    path('UserLoginCheck/', usr.UserLoginCheck, name='UserLoginCheck'),
    path('UserHome/', usr.UserHome, name='UserHome'),
    path('detect/', usr.detect, name='detect'),
    path('train/', usr.train, name='train'),
    path('upload_image/', usr.upload_image, name='upload_image'),
    path("UploadImageAction/", usr.UploadImageAction, name="UploadImageAction"),




    # Admin side virews
    path('AdminLoginCheck/', admns.AdminLoginCheck, name='AdminLoginCheck'),
    path('AdminHome/', admns.AdminHome, name='AdminHome'),
    path('ViewRegisteredUsers/', admns.ViewRegisteredUsers,
         name='ViewRegisteredUsers'),
    path('AdminActivaUsers/', admns.AdminActivaUsers, name='AdminActivaUsers'),

]
urlpatterns += staticfiles_urlpatterns()
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
