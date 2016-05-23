from rest_framework import serializers
from .models import Perfil, Redes, Estudios


class PerfilSerializer(serializers.ModelSerializer):
    class Meta:
        model = Perfil
        fields = ["nombre", "fecha_nacimiento", "celular", "email", "descripcion", "cv"]


class RedesSerializers(serializers.ModelSerializer):
    class Meta:
        model = Redes
        fields = ["bitbucket", "youtube", "github", "facebook", "linkedin"]


class EstudiosSerializers(serializers.ModelSerializer):

    class Meta:
        model = Estudios
        fields = ["titulo", "tiempo"]
