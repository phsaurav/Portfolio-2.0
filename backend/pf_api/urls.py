from django.urls import include, path
# from rest_framework import routers
from pf_api import views

# router = routers.DefaultRouter()
# router.register(r'users', views.UserViewSet)
# router.register(r'project', views.AllProjects)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('projects/', views.ProjectList.as_view(), name='projects'),
    path('projects/<int:pk>', views.ProjectDetail.as_view(), name='project'),
    # path('', include(router.urls)),
    # path('api/', include('rest_framework.urls', namespace='rest_framework'))
]