from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Perfil, Redes, Estudios, Skill

from .serializers import PerfilSerializer, RedesSerializers, EstudiosSerializers, SkillSerializers


@api_view(['GET', 'POST'])
def perfil(request):
    if request.method == "GET":
        perfil_c, create = Perfil.objects.get_or_create(pk=1)
        serializer = PerfilSerializer(perfil_c)
        return Response(serializer.data)


@api_view(['GET', 'POST'])
def redes(request):
    if request.method == "GET":
        redes_r, create_r = Redes.objects.get_or_create(pk=1)
        serializer_r = RedesSerializers(redes_r)
        return Response(serializer_r.data)


@api_view(['GET'])
def skills(request):
    if request.method == "GET":
        skills = Skill.objects.all().order_by("porcentaje")
        serializer = SkillSerializers(skills, many=True)
        return Response(serializer.data)


def home(request):
    return render(request, "jade/perfil.jade", locals())
