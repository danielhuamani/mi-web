from rest_framework import serializers
from .models import Perfil, Redes, Estudios, Skill


class PerfilSerializer(serializers.ModelSerializer):
    nacimiento = serializers.SerializerMethodField("fe_nacimiento")

    def fe_nacimiento(self, perfll):
        return perfll.fecha_nacimiento.strftime("%m/%d/%Y")

    class Meta:
        model = Perfil
        fields = ["nombre", "nacimiento", "celular", "email", "descripcion", "cv"]


class RedesSerializers(serializers.ModelSerializer):
    class Meta:
        model = Redes
        fields = ["bitbucket", "youtube", "github", "facebook", "linkedin"]


class EstudiosSerializers(serializers.ModelSerializer):

    class Meta:
        model = Estudios
        fields = ["titulo", "tiempo"]


class SkillSerializers(serializers.ModelSerializer):

    class Meta:
        model = Skill
        fiels = ['nombre', 'porcentaje', 'icon']
