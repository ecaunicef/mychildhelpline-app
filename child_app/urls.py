from django.urls import path
from . import views

urlpatterns = [
    path(
        "combined_intent/",
        views.async_chatbot_view,
        name="combined-async-chatbot-view",
    ),
]
