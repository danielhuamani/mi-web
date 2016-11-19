from django.contrib import admin
from django_summernote.admin import SummernoteModelAdmin
from .models import Perfil, Redes, Estudios, Skill, Experiencia, Categoria, Proyecto, Tags, TipoSkill


class PerfilAdmin(SummernoteModelAdmin):
    model = Perfil


class ExperienciaAdmin(SummernoteModelAdmin):
    model = Experiencia


admin.site.register(Perfil, PerfilAdmin)
admin.site.register(Redes)
admin.site.register(Estudios)
admin.site.register(Skill)
admin.site.register(Experiencia, ExperienciaAdmin)
admin.site.register(Categoria)
admin.site.register(Proyecto)
admin.site.register(TipoSkill)
admin.site.register(Tags)
