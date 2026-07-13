def register_routes(app):
    from app.routes.web import main
    app.register_blueprint(main, url_prefix='/')
