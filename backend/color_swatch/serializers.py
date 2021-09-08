from rest_framework import serializers
from .models import ColorSpace
import random


class ColorSpaceSerializer(serializers.ModelSerializer):
    components = serializers.SerializerMethodField()

    class Meta:
        model = ColorSpace
        fields = ("id", "title", "type", "components")

    def get_components(self, instance):
        components = {}
        display_labels_list = []

        for component in instance.components.all():
            component_min = component.value_min
            component_max = component.value_max
            display_min = component.display_min
            display_max = component.display_max

            value = random.randint(component_min, component_max)
            old_display_value = value

            display_value = (((old_display_value - component_min) * (display_max - display_min)) / (
                    component_max - component_min)) + display_min
            components[component.key] = value
            display_labels_list.append({"label": component.label, "value": int(display_value)})

        return {"color_components": components, "color_display_labels": display_labels_list}
