
import tensorflow as tf

from django.shortcuts import render, HttpResponse
from django.contrib import messages
from .forms import UserRegistrationForm
from .models import UserRegistrationModel,UserImageMaskModel
from django.core.files.storage import FileSystemStorage

from tensorflow import keras
from tensorflow.keras import layers
from tensorflow.keras.models import Sequential
from tensorflow import keras

import matplotlib.pyplot as plt
from tensorflow.keras.preprocessing.image import ImageDataGenerator

import numpy as np


import keras.backend as k
from keras.layers import Conv2D, MaxPooling2D, SpatialDropout2D, Flatten, Dropout, Dense
from keras.models import Sequential, load_model
from keras.optimizers import Adam
# from tensorflow.keras.preprocessing.image import img_to_array
from tensorflow.keras.utils import img_to_array


import cv2
import datetime
from keras.models import Sequential
from keras.models import Model


# Create your views here.
def UserRegisterActions(request):
    if request.method == 'POST':
        form = UserRegistrationForm(request.POST)
        if form.is_valid():
            print('Data is Valid')
            form.save()
            messages.success(request, 'You have been successfully registered')
            form = UserRegistrationForm()
            return render(request, 'UserRegistrations.html', {'form': form})
        else:
            messages.success(request, 'Email or Mobile Already Existed')
            print("Invalid form")
    else:
        form = UserRegistrationForm()
    return render(request, 'UserRegistrations.html', {'form': form})


def UserLoginCheck(request):
    if request.method == "POST":
        loginid = request.POST.get('loginname')
        pswd = request.POST.get('pswd')
        print("Login ID = ", loginid, ' Password = ', pswd)
        try:
            check = UserRegistrationModel.objects.get(
                loginid=loginid, password=pswd)
            status = check.status
            print('Status is = ', status)
            if status == "activated":
                request.session['id'] = check.id
                request.session['loggeduser'] = check.name
                request.session['loginid'] = loginid
                request.session['email'] = check.email
                print("User id At", check.id, status)
                return render(request, 'users/UserHome.html', {})
            else:
                messages.success(request, 'Your Account Not at activated')
                return render(request, 'UserLogin.html')
        except Exception as e:
            print('Exception is ', str(e))
            pass
        messages.success(request, 'Invalid Login id and password')
    return render(request, 'UserLogin.html', {})


def UserHome(request):
    return render(request, 'users/UserHome.html', {})


def train(request):

    model = Sequential()
    model.add(Conv2D(32, (3, 3), activation='relu', input_shape=(150, 150, 3)))
    model.add(MaxPooling2D())
    model.add(Conv2D(32, (3, 3), activation='relu'))
    model.add(MaxPooling2D())
    model.add(Conv2D(32, (3, 3), activation='relu'))
    model.add(MaxPooling2D())
    model.add(Flatten())
    model.add(Dense(100, activation='relu'))
    model.add(Dense(1, activation='sigmoid'))

    model.compile(optimizer='adam', loss='binary_crossentropy',
                  metrics=['acc'])

    train_datagen = ImageDataGenerator(
        rescale=1./255,
        shear_range=0.2,
        zoom_range=0.2,
        horizontal_flip=True)

    test_datagen = ImageDataGenerator(rescale=1./255)

    training_set = train_datagen.flow_from_directory(
        'train',
        target_size=(150, 150),
        batch_size=16,
        class_mode='binary')

    test_set = test_datagen.flow_from_directory(
        'test',
        target_size=(150, 150),
        batch_size=16,
        class_mode='binary')

    history = model.fit_generator(
        training_set,
        epochs=2,
        validation_data=test_set,)
    print(history.history.keys())

# summarize model_saved for accuracy

    plt.plot(history.history['acc'])
    plt.plot(history.history['val_acc'])
    plt.title('model acc')
    plt.ylabel('acc')
    plt.xlabel('epoch')
    plt.legend(['train', 'test'], loc='upper left')
    plt.savefig('model_acc.png')
    plt.show()

    # summarize model_saved for loss

    plt.plot(history.history['loss'])
    plt.plot(history.history['val_loss'])
    plt.title('model loss')
    plt.ylabel('loss')
    plt.xlabel('epoch')
    plt.legend(['train', 'test'], loc='upper left')
    plt.savefig('model_loss.png')

    plt.show()

    return render(request, 'users/train.html')


def detect(request):
    import subprocess
    runvalue = "yolov5_model.py"
    subprocess.call("python " + runvalue)
    return render(request, 'users/UserHome.html')



def upload_image(request):
    if request.method == 'POST':
        myfile = request.FILES['file']
        fs = FileSystemStorage()
        filename = fs.save(myfile.name, myfile)
        uploaded_file_url = fs.url(filename)
        from .utility.yolomodels import face_mask_detection
        results_caption = face_mask_detection(filename)
        loginid = request.session['loginid']
        messages.success(request, 'Image Processed Success')
        print("File Image Name " + uploaded_file_url)
        return render(request, "users/upload_image.html", {'path': uploaded_file_url})
    else:
        return render(request, 'users/upload_image.html', {})








def UploadImageAction(request):
    if request.method=='POST':
        image_file = request.FILES['file']
        print('if....')
        fs = FileSystemStorage(location="media/actions/")
        filename = fs.save(image_file.name, image_file)
        print('filename:',filename)
        # detect_filename = fs.save(image_file.name, image_file)
        uploaded_file_url = "/media/actions/" + filename  # fs.url(filename)
        from .utility.ClassifyImages import image_face_mask_detection
        results_caption = image_face_mask_detection(filename)
        loginid = request.session['loginid']
        email = request.session['email']
        UserImageMaskModel.objects.create(username=loginid, email=email, filename=filename, file=uploaded_file_url)
        messages.success(request, 'Image Processed Success')
    

        print("Image path ", uploaded_file_url)
        return render(request,"users/upload_image.html",{'path':uploaded_file_url})
    else:
        return render(request,'users/upload_image.html',{})

    # from 
    # obj = ClassifyUserPics()
    # result = obj.startProcess(filename)
    # print("Result=", result)
    # return render(request, "users/UploadPicForm.html", {'result': result})
