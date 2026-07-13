from flask import Blueprint
from app.controllers.homeController import index

home_bp = Blueprint("home_bp", __name__)
home_bp.add_url_rule("/", view_func=index)