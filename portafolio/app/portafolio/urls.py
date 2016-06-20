from django.conf.urls import url, include
from rest_framework import routers
from .views import perfil, home, redes, skills, experiencia


# Routers provide an easy way of automatically determining the URL conf.
# router = routers.DefaultRouter()
# router.register(r'perfil', PerfilViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    url(r'^api/perfil/$', perfil, name="perfil"),
    url(r'^api/redes/$', redes, name="redes"),
    url(r'^api/skills/$', skills, name="skills"),
    url(r'^api/experiencias/$', experiencia, name="experiencia"),
    url(r'^$', home, name="home"),
]
