from django.db import models
from django.core.validators import FileExtensionValidator


class Data(models.Model):
    date = models.DateTimeField(primary_key=True, auto_now_add=True)
    audio_video = models.FileField(null=True, blank=True, upload_to='media/', validators=[FileExtensionValidator(allowed_extensions=['mp4', 'mkv', 'mov', 'avi', 'wav', 'mp3', 'aac', 'flac'])])
    text = models.TextField(null=True)
