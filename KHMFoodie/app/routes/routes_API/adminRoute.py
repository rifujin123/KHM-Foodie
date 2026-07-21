from flask import Blueprint
from flask_login import login_required
from app.controllers.adminController import AdminController
from app.middleware import admin_required

admin_api = Blueprint("admin_api", __name__)

admin_api.add_url_rule(
    "/restaurants",
    view_func=login_required(admin_required(AdminController.list_restaurants)),
    methods=["GET"]
)
admin_api.add_url_rule(
    "/restaurants/<int:restaurant_id>/approve",
    view_func=login_required(admin_required(AdminController.approve_restaurant)),
    methods=["PATCH"]
)
admin_api.add_url_rule(
    "/restaurants/<int:restaurant_id>/reject",
    view_func=login_required(admin_required(AdminController.reject_restaurant)),
    methods=["PATCH"]
)
