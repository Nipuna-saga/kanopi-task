from django.urls import path
from . import views


urlpatterns = [
    path("", views.get_color_swatch, name="color_swatches"),

]
