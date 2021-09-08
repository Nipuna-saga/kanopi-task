from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny

from .models import ColorSpace
from .serializers import ColorSpaceSerializer

import random

@api_view(["GET"])
@permission_classes([AllowAny])
def get_color_swatch(request):
    try:
        color_spaces = ColorSpace.objects.all()
        new_color_spaces = []

        for index in range(5):
            new_color_spaces.append(random.choice(color_spaces))

        return Response(
            ColorSpaceSerializer(new_color_spaces, many=True).data,
            status=status.HTTP_200_OK,
        )
    except Exception as e:
        print(e)
        return Response(status=status.HTTP_400_BAD_REQUEST)
