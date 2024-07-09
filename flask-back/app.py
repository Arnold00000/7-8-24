from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
import datetime

app = Flask(__name__)

# Database configuration
app.config["SQLALchemy_DATABASE_URI"] = "mysql+pymysql://root:Yes@localhost/userdatadb"
app.config["SQLALchemy_TRACK_MODIFICATIONS"] = False
db = SQLAlchemy(app)


class Users(db.Model):
    __tablename__ = "admins"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    email = db.Column(db.String(100))
    date = db.Column(db.DateTime, default=datetime.datetime.now)

    def __init__(self, name, email):
        self.name = name
        self.email = email


@app.route("/")
def home():
    return "<p>Homess</p>"


@app.route("/useradd", methods=["POST"])
def useradd():
    name = request.json["name"]
    email = request.json["email"]

    admins = Users(name, email)
    db.session.add(admins)
    db.session.commit()

    return jsonify({"success": "Success post"})


if __name__ == "__main__":
    app.run(debug=True)


# # C:\flask_dev\flaskreact\app.py
# import json
# from flask import Flask, request, jsonify
# from datetime import datetime, timedelta, timezone
# from flask_jwt_extended import (
#     create_access_token,
#     get_jwt,
#     get_jwt_identity,
#     unset_jwt_cookies,
#     jwt_required,
#     JWTManager,
# )
# from flask_bcrypt import Bcrypt
# from flask_cors import CORS
# from flask_sqlalchemy import SQLAlchemy
# from flask_marshmallow import Marshmallow

# app = Flask(__name__)
# CORS(app, supports_credentials=True)

# # app.config["SECRET_KEY"] = "cairocoders-ednalan"
# # app.config["SQLALCHEMY_DATABASE_URI"] = "mysql+pymysql://root:" "@localhost/flaskreact"
# # app.config["SQLALCHEMY_DATABASE_URI"] = (
# #     "mysql+pymsql://1234!@#$@localhost:root@localhost:3306/userdatadb"
# # )
# # app.config["SECRET_KEY"] = "39a8472e8fa391fc"
# # app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(hours=1)
# # app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
# # app.config["SQLALCHEMY_ECHO"] = True

# jwt = JWTManager(app)
# bcrypt = Bcrypt(app)
# db = SQLAlchemy(app)
# ma = Marshmallow(app)


# class User(db.Model):
#     __tablename__ = "users"
#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(100))
#     email = db.Column(db.String(100), unique=True)
#     password = db.Column(db.Text, nullable=False)
#     about = db.Column(db.Text, nullable=False, default="")


# class UserSchema(ma.Schema):
#     class Meta:
#         fields = ("id", "name", "email", "about", "date")


# user_schema = UserSchema()
# users_schema = UserSchema(many=True)


# @app.route("/")
# def hello_world():
#     return "<p>Hello, World!</p>"


# @app.route("/logintoken", methods=["POST"])
# def create_token():
#     email = request.json.get("email", None)
#     password = request.json.get("password", None)
#     user = User.query.filter_by(email=email).first()
#     if user is None or not bcrypt.check_password_hash(user.password, password):
#         return jsonify({"error": "Unauthorized"}), 401
#     access_token = create_access_token(identity=email)
#     return jsonify({"email": email, "access_token": access_token})


# @app.route("/signup", methods=["POST"])
# def signup():
#     email = request.json["email"]
#     password = request.json["password"]
#     user_exists = User.query.filter_by(email=email).first() is not None
#     if user_exists:
#         return jsonify({"error": "Email already exists"}), 409
#     hashed_password = bcrypt.generate_password_hash(password)
#     new_user = User(
#         name="cairocoders Ednalan",
#         email=email,
#         password=hashed_password,
#         about="sample about me",
#     )
#     db.session.add(new_user)
#     db.session.commit()
#     return jsonify({"id": new_user.id, "email": new_user.email})


# @app.after_request
# def refresh_expiring_jwts(response):
#     try:
#         exp_timestamp = get_jwt()["exp"]
#         now = datetime.now(timezone.utc)
#         target_timestamp = datetime.timestamp(now + timedelta(minutes=30))
#         if target_timestamp > exp_timestamp:
#             access_token = create_access_token(identity=get_jwt_identity())
#             data = response.get_json()
#             if type(data) is dict:
#                 data["access_token"] = access_token
#                 response.data = json.dumps(data)
#         return response
#     except (RuntimeError, KeyError):
#         return response


# @app.route("/logout", methods=["POST"])
# def logout():
#     response = jsonify({"msg": "logout successful"})
#     unset_jwt_cookies(response)
#     return response


# @app.route("/profile/<getemail>")
# @jwt_required()
# def my_profile(getemail):
#     user = User.query.filter_by(email=getemail).first()
#     if not user:
#         return jsonify({"error": "Unauthorized Access"}), 401
#     response_body = {
#         "id": user.id,
#         "name": user.name,
#         "email": user.email,
#         "about": user.about,
#     }
#     return response_body


# @app.route("/listusers", methods=["GET"])
# def listusers():
#     all_users = User.query.all()
#     results = users_schema.dump(all_users)
#     return jsonify(results)


# @app.route("/userdetails/<id>", methods=["GET"])
# def userdetails(id):
#     user = User.query.get(id)
#     return user_schema.jsonify(user)


# @app.route("/userupdate/<id>", methods=["PUT"])
# def userupdate(id):
#     user = User.query.get(id)
#     name = request.json["name"]
#     email = request.json["email"]
#     about = request.json.get("about", user.about)
#     user.name = name
#     user.email = email
#     user.about = about
#     db.session.commit()
#     return user_schema.jsonify(user)


# @app.route("/userdelete/<id>", methods=["DELETE"])
# def userdelete(id):
#     user = User.query.get(id)
#     db.session.delete(user)
#     db.session.commit()
#     return user_schema.jsonify(user)


# @app.route("/useradd", methods=["POST"])
# def useradd():
#     name = request.json["name"]
#     email = request.json["email"]
#     about = request.json.get("about", "")
#     password = bcrypt.generate_password_hash(request.json["password"]).decode("utf-8")
#     new_user = User(name=name, email=email, about=about, password=password)
#     db.session.add(new_user)
#     db.session.commit()
#     return user_schema.jsonify(new_user)


# if __name__ == "__main__":
#     with app.app_context():
#         db.create_all()
#     app.run(debug=True)
