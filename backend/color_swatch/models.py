from django.db import models


class ColorSpace(models.Model):
    title = models.CharField(max_length=50, editable=True)
    type = models.CharField(max_length=10, editable=True)
    description = models.TextField(null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class ColorComponent(models.Model):
    color_space = models.ForeignKey(ColorSpace, on_delete=models.CASCADE, related_name="components")
    value_min = models.IntegerField(default=0)
    value_max = models.IntegerField(default=0)
    display_min = models.IntegerField(default=0)
    display_max = models.IntegerField(default=0)
    key = models.CharField(max_length=50, editable=True)
    label = models.CharField(max_length=50, editable=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
