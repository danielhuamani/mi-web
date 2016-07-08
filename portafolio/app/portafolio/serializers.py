from rest_framework import serializers
from .models import Perfil, Redes, Estudios, Skill, Experiencia, Categoria, Proyecto


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

class ExperienciaSerializers(serializers.ModelSerializer):
    f_inicio = serializers.SerializerMethodField("fe_inicio")
    f_termino = serializers.SerializerMethodField("fe_termino")
    trun_descripcion = serializers.SerializerMethodField("truncate_descripcion")

    def fe_inicio(self, experiencia):
        return experiencia.fecha_inicio.strftime("%m/%d/%Y")

    def fe_termino(self, experiencia):
        return experiencia.fecha_termino.strftime("%m/%d/%Y")

    def truncate_descripcion(self, experiencia):
        truncate = experiencia.descripcion[:90] + "..."
        return truncate

    class Meta:
        model = Experiencia
        fields = ['nombre', 'f_inicio', 'f_termino', 'url', 'descripcion', 'trun_descripcion', 'id']


class ProyectoSerializers(serializers.ModelSerializer):

    class Meta:
        model = Proyecto
        fields = ['nombre', 'image']


class CategoriaSerializers(serializers.ModelSerializer):
    categoria_proyecto = ProyectoSerializers(many=True)

    class Meta:
        model = Categoria
        fields = ['id', 'posicion', 'nombre', 'categoria_proyecto']
