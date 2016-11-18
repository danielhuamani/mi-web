from rest_framework import serializers
from sorl.thumbnail import get_thumbnail
from .models import Perfil, Redes, Estudios, Skill, Experiencia, Categoria, Proyecto, TipoSkill


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


class TipoSkillSerializers(serializers.ModelSerializer):
    tipo_skill_set = SkillSerializers(many=True)

    class Meta:
        model = TipoSkill
        fields = ['nombre', 'posicion', 'tipo_skill_set', 'id']


class ExperienciaSerializers(serializers.ModelSerializer):
    f_inicio = serializers.SerializerMethodField("fe_inicio")
    f_termino = serializers.SerializerMethodField("fe_termino")
    trun_descripcion = serializers.SerializerMethodField("truncate_descripcion")
    logo_t = serializers.SerializerMethodField("logo_thumbnail")

    def fe_inicio(self, experiencia):
        return experiencia.fecha_inicio.strftime("%m/%d/%Y")

    def fe_termino(self, experiencia):
        return experiencia.fecha_termino.strftime("%m/%d/%Y")

    def truncate_descripcion(self, experiencia):
        truncate = experiencia.descripcion[:150] + "..."
        return truncate

    def logo_thumbnail(self, experiencia):
        logo_thum = ''
        print (experiencia.logo)
        if experiencia.logo:
            logo_thum = get_thumbnail(experiencia.logo, '284x101', crop='center', quality=100)
            logo_thum = logo_thum.url
        return str(logo_thum)

    class Meta:
        model = Experiencia
        fields = ['nombre', 'f_inicio', 'f_termino', 'url', 'descripcion', 'trun_descripcion', 'id', 'logo', 'logo_t']


class ProyectoSerializers(serializers.ModelSerializer):
    image_crop = serializers.SerializerMethodField("logo_thumbnail")

    def logo_thumbnail(self, proyecto):
        logo_thum = ''
        if proyecto.image:
            logo_thum = get_thumbnail(proyecto.image, '300x220', crop='center', quality=100)
            logo_thum = logo_thum.url
        return str(logo_thum)

    class Meta:
        model = Proyecto
        fields = ['nombre', 'image', 'id', 'url', 'image_crop']


class CategoriaSerializers(serializers.ModelSerializer):
    categoria_proyecto = ProyectoSerializers(many=True)

    class Meta:
        model = Categoria
        fields = ['id', 'posicion', 'nombre', 'categoria_proyecto']
