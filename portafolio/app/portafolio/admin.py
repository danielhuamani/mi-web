from django.contrib import admin
from django_summernote.admin import SummernoteModelAdmin
from .models import Perfil, Redes, Estudios, Skill, Experiencia


class PerfilAdmin(SummernoteModelAdmin):
    model = Perfil


class ExperienciaAdmin(SummernoteModelAdmin):
    model = Experiencia


admin.site.register(Perfil, PerfilAdmin)
admin.site.register(Redes)

admin.site.register(Estudios)
admin.site.register(Skill)
admin.site.register(Experiencia, ExperienciaAdmin)
