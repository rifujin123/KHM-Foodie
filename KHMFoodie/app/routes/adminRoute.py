from flask import Blueprint
from flask_login import login_required
from app.controllers.adminController import AdminController
from app.middleware import admin_required

admin_bp = Blueprint('admin_bp', __name__, url_prefix='/admin')

admin_bp.add_url_rule(
    '/restaurants/pending',
    view_func=login_required(admin_required(AdminController.restaurant_pending_approval))
)