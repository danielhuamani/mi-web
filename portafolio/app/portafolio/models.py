from __future__ import unicode_literals

from django.db import models


class Perfil(models.Model):
    nombre = models.CharField("Nombre", max_length=120)
    fecha_nacimiento = models.DateField("Fecha Nacimiento")
    celular = models.CharField("celular", max_length=120)
    email = models.EmailField("Email")
    descripcion = models.TextField()
    cv = models.FileField("PDF")

    class Meta:
        verbose_name = "Perfil"
        verbose_name_plural = "Perfils"

    def __unicode__(self):
        return self.nombre


class Estudios(models.Model):
    titulo = models.CharField("titulo", max_length=120)
    tiempo = models.CharField("tiempo", max_length=120)

    class Meta:
        verbose_name = "Estudios"
        verbose_name_plural = "Estudioss"

    def __unicode__(self):
        return self.titulo


class Redes(models.Model):
    bitbucket = models.URLField()
    youtube = models.URLField()
    facebook = models.URLField()
    github = models.URLField()
    linkedin = models.URLField()

    class Meta:
        verbose_name = "Redes"
        verbose_name_plural = "Redess"

    def __unicode__(self):
        return self.bitbucket
