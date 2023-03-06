"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

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

@api.route('/user/1', methods=['DELETE'])
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