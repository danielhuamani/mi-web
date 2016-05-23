# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2016-05-22 20:08
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Estudios',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titulo', models.CharField(max_length=120, verbose_name='titulo')),
                ('tiempo', models.CharField(max_length=120, verbose_name='tiempo')),
            ],
            options={
                'verbose_name': 'Estudios',
                'verbose_name_plural': 'Estudioss',
            },
        ),
        migrations.CreateModel(
            name='Perfil',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=120, verbose_name='Nombre')),
                ('fecha_nacimiento', models.DateField(verbose_name='Fecha Nacimiento')),
                ('celular', models.CharField(max_length=120, verbose_name='celular')),
                ('email', models.EmailField(max_length=254, verbose_name='Email')),
                ('descripcion', models.TextField()),
                ('cv', models.FileField(upload_to=b'', verbose_name='PDF')),
            ],
            options={
                'verbose_name': 'Perfil',
                'verbose_name_plural': 'Perfils',
            },
        ),
        migrations.CreateModel(
            name='Redes',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('bitbucket', models.URLField()),
                ('youtube', models.URLField()),
                ('facebook', models.URLField()),
                ('github', models.URLField()),
                ('linkedin', models.URLField()),
            ],
            options={
                'verbose_name': 'Redes',
                'verbose_name_plural': 'Redess',
            },
        ),
    ]