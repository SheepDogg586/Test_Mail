"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
@jwt_required()
def handle_hello():
    
    email = get_jwt_identity()
    response_body = {
        "message": "Hello!" + email
    }

    return jsonify(response_body), 200

@api.route("/register", methods=["POST"])
def register():
  if request.method == 'POST':
    request_body = request.get_json()
    username = request_body.get('username')
    email = request_body.get('email')
    password = request_body.get('password')

    if not username or not email or not password:
        if not username:
            return jsonify({"msg": "Username is required"}), 400
        if not email:
            return jsonify({"msg": "Email is required"}), 400
        if not password:
            jsonify({"msg": "Password is required"}), 400


    user = User.query.filter_by(email=request_body["email"]).first()
    if user:
      return jsonify({"msg": "User already exists"}), 400

    user = User(
          username = username,
          email = email,
          password = generate_password_hash(password),
      )

    db.session.add(user)   
    db.session.commit()
    return jsonify({"created": "Thanks. Your registration was successfully", "status": "true"}), 200

@api.route("/token", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    if email != "" or password != "":
        return jsonify({"msg": "Bad email or password"}), 401

    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)

@api.route('/user', methods=['POST'])
def create_user():
    user = User()
    body = request.get_json()
    user.email = body.get('email')
    user.password = body.get('password')
    user.is_active = body.get('is_active', True)
    db.session.add(user)
    db.session.commit()
    return jsonify(user.email), 200

@api.route('/user', methods=['GET'])
def get_user():
    users = User.query.all()
    all_users = list(map(lambda x: x.serialize(), users))
    return jsonify(all_users), 200

@api.route('/user/<int:user_id>', methods=['DELETE'])
def delete_account(user_id):
    user = db.session.query(User).get(user_id)
    db.session.delete(user)
    db.session.commit()
    return jsonify({"message": "Account has been deleted"})
    
@api.route('/user/<int:user_id>/favorite_location/<int:location_id>', methods=['DELETE'])
def delete_favorites_location(user_id, location_id):
    user = db.session.query(User).get(user_id)
    location = Location.query.get(location_id)
    try:
        user.favorite_location.remove(location)
        db.session.commit()
        return success('Successfully deleted favorite!')
    except ValueError as e:
        raise APIException('Problem deleting favorite location: {}'.format(location_id))
    except Exception as e:
        raise APIException('Unexcepted error')
    
@api.route('/user/<int:user_id>/favorite_equipment/<int:equipment_id>', methods=['DELETE'])
def delete_favorites_equipment(user_id, equipment_id):
    user = db.session.query(User).get(user_id)
    equipment = Equipment.query.get(equipment_id)
    try:
        user.favorite_equipment.remove(equipment)
        db.session.commit()
        return success('Successfully deleted favorite!')
    except ValueError as e:
        raise APIException('Problem deleting favorite equipment: {}'.format(equipment_id))
    except Exception as e:
        raise APIException('Unexcepted error')