from flask import Blueprint, render_template
from flask_login import login_required, current_user
from functools import wraps

admin_bp = Blueprint('admin_bp', __name__, url_prefix='/admin')


def admin_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        from app.models.model import UserRole
        if not current_user.is_authenticated or current_user.role != UserRole.ADMIN:
            return "Unauthorized", 403
        return f(*args, **kwargs)
    return decorated_function


@admin_bp.route('/restaurants/pending')
@login_required
@admin_required
def restaurant_pending_approval():
    return render_template('admin/restaurant_pending_approval.html')
