from django.urls import path
from . import views

urlpatterns = [
    path('',views.Task_list_view.as_view()),
    path('<int:pk>/',views.Task_detail_view.as_view()),
]