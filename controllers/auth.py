from flask import Blueprint, jsonify, request, g
from models.user import UserSchema, User
from models.message import MessageSchema, Message
from lib.secure_route import secure_route

api = Blueprint('auth', __name__)
user_schema = UserSchema()
message_schema = MessageSchema()

@api.route('/register', methods=['POST'])
def register():

    user, errors = user_schema.load(request.get_json())

    if errors:
        return jsonify(errors), 422

    user.save()

    return jsonify({'message': 'Registration successful'}), 201


@api.route('/login', methods=['POST'])
def login():

    data = request.get_json()
    user = User.query.filter_by(email=data.get('email')).first()

    if not user or not user.validate_password(data.get('password', '')):
        return jsonify({'message': 'Unauthorized'}), 401

    return jsonify({
        'message': 'Welcome back {}!'.format(user.username),
        'token': user.generate_token()
    })

@api.route('/users/<int:user_id>', methods=['GET'])
def users_show(user_id):
    user = User.query.get(user_id)
    return user_schema.jsonify(user)


@api.route('/users/<int:user_id>/inbox', methods=['POST'])
@secure_route
def send_message(user_id):

    message, errors = message_schema.load(request.get_json())
    message.sender = g.current_user
    message.receiver = User.query.get(user_id)

    if errors:
        return jsonify(errors), 422

    message.save()
    return message_schema.jsonify(message)



@api.route('/me', methods=['GET'])
@secure_route
def me():

    return user_schema.jsonify(g.current_user)
