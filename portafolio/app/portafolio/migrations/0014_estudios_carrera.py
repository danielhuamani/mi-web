# -*- coding: utf-8 -*-
# Generated by Django 1.9.2 on 2016-08-05 20:28
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portafolio', '0013_auto_20160805_1952'),
    ]

    operations = [
        migrations.AddField(
            model_name='estudios',
            name='carrera',
            field=models.CharField(default='', max_length=120, verbose_name='carrera'),
            preserve_default=False,
        ),
    ]