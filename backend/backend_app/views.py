from django.http import JsonResponse
from django.core.files.storage import FileSystemStorage
from django.core import serializers

from rest_framework.decorators import api_view

import time


# import models:
from .models import Data


# data upload API:
@api_view(['POST'])
def upload_data(request):
    timestamp = str(time.time())

    fs = FileSystemStorage()

    # handle a/v upload
    file = request.data.get('audio_video')

    # save uploaded a/v file to storage
    filename = fs.save('file_' + timestamp + '_' + file.name, file)  # append unix timestamp
    uploaded_file_url_av = fs.url(filename)

    # handle text upload
    text_data = request.data.get('text')

    # record to db
    obj = Data.objects.create(audio_video=request.build_absolute_uri(uploaded_file_url_av), text=text_data)

    if obj:
        return JsonResponse({ 'code': 200, 'msg': [request.build_absolute_uri(uploaded_file_url_av), text_data] })
    else:
        return JsonResponse({ 'code': 400, 'msg': 'bad request' })


# data view API:
@api_view(['GET'])
def get_all_data(request):
    DataModel_json = serializers.serialize('json', Data.objects.all())
    return JsonResponse({ 'code': 200, 'msg':  DataModel_json})
