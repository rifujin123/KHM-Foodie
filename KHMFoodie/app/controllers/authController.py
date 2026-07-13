from flask import request, jsonify
from app.models.model import hash_password
from app.dao.userDao import UserDao
from flask_login import login_user


class LoginController:

    @staticmethod
    def login():
        data = request.get_json()
        if not data:
            return jsonify({"message": "Invalid JSON"}), 400

        username = data.get("username")
        password = data.get("password")
        remember = data.get("remember", False)

        if not username or not password:
            return jsonify({"message": "Username and password required"}), 400

        user = UserDao.get_by_username(username)
        if user and user.password == hash_password(password):
            login_user(user, remember=remember)
            return jsonify({
                "message": "Login successful",
                "user": {
                    "id": user.id,
                    "name": user.name,
                    "role": user.role.value if user.role else None
                }
            }), 200

        return jsonify({"message": "Invalid credentials"}), 401
