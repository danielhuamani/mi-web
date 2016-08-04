from __future__ import unicode_literals

from django.db import models


class Perfil(models.Model):
    nombre = models.CharField("Nombre", max_length=120)
    fecha_nacimiento = models.DateField("Fecha Nacimiento")
    celular = models.CharField("celular", max_length=120)
    email = models.EmailField("Email")
    descripcion = models.TextField()
    cv = models.FileField("PDF", upload_to="cv")

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


class Skill(models.Model):
    nombre = models.CharField("Nombre", max_length=120)
    porcentaje = models.PositiveIntegerField("Porcentaje")
    icon = models.CharField("Icon", max_length=120)

    class Meta:
        verbose_name = "Skill"
        verbose_name_plural = "Skills"

    def __unicode__(self):
        return self.nombre


class Experiencia(models.Model):
    nombre = models.CharField("Nombre", max_length=120)
    fecha_inicio = models.DateField("Fecha Inicio")
    fecha_termino = models.DateField("Fecha Termino")
    url = models.URLField()
    descripcion = models.TextField("Descripcion")

    class Meta:
        verbose_name = "Experiencia"
        verbose_name_plural = "Experiencias"

    def __unicode__(self):
        return self.nombre


class Categoria(models.Model):
    nombre = models.CharField("Nombre", max_length=120)
    posicion = models.PositiveIntegerField(default=0)

    class Meta:
        verbose_name = 'Categoria'
        verbose_name_plural = 'Categorias'

    def __unicode__(self):
        return self.nombre


class Proyecto(models.Model):
    categoria = models.ForeignKey(Categoria, related_name="categoria_proyecto")
    nombre = models.CharField("Nombre", max_length=120)
    image = models.ImageField("Imagen", upload_to="proyecto")
    posicion = models.PositiveIntegerField(default=0)
    url = models.URLField("Url", blank=True)

    class Meta:
        verbose_name = 'proyectos'
        verbose_name_plural = 'proyectoss'

    def __unicode__(self):
        return self.nombre
