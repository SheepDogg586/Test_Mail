"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
import hashlib
import re


from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

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
    data = request.get_json()

    if not data:
        return jsonify({'error': 'Missing JSON data'}), 400

    email = data.get('email')
    password = data.get('password')

    if not email:
        return jsonify({'error': 'Missing email field'}), 400
    if not password:
        return jsonify({'error': 'Missing password field'}), 400

    if not re.match(r"[^@]+@[^@]+\.[^@]+", email):
        return jsonify({'error': 'Invalid email format'}), 400

    if len(password) < 8:
        return jsonify({'error': 'Password must be at least 8 characters long'}), 400

    has_email = User.query.filter_by(email=email).first()
    if has_email is not None:
        return jsonify({'error': 'Email already exists'}), 409

    hashed_password = hashlib.sha256(password.encode('utf-8')).hexdigest()

    new_user = User(email=email, password=hashed_password, is_active=True)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({'message': 'Successfully created account!'}), 201

@api.route('/login', methods = ['POST'])
def login():
    body = request.get_json(force = True)
    email = body['email']
    password = hashlib.sha256(body['password'].encode("utf-8")).hexdigest()
    print(password)
    has_user = User.query.filter_by(email = email, password = password).first()
    if has_user is not None:
        access_token = create_access_token(identity = email)
        return jsonify(access_token = access_token), 200

    return jsonify('Invalid credentials'), 400

@api.route("/token", methods=["GET"])
@jwt_required()
def validate_identity():
    current_user = get_jwt_identity()
    return jsonify(logged_in_as = current_user)

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