from app.routes.routes_API.authRoute import auth_bp
from app.routes.routes_API.restaurantRoute import restaurant_api


def route_api(app):
    app.register_blueprint(restaurant_api, url_prefix="/api/restaurants")
    app.register_blueprint(auth_bp, url_prefix="/api/auth")