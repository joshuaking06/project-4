# pylint: disable=W0611
from flask import Blueprint, jsonify, request, g
from lib.secure_route import secure_route
from models.user import UserSchema, User
from models.message import MessageSchema
from models.story import Story, StorySchema

api = Blueprint('auth', __name__)
user_schema = UserSchema()
message_schema = MessageSchema()
# pylint: disable=C0301
users_schema = UserSchema(many=True, exclude=('followers', 'following', 'inbox', 'outbox', 'read_list'))
story_schema = StorySchema()
user_schema = UserSchema(exclude=('inbox', 'outbox', 'read_list'))
# user_schema = UserSchema()


# == REGISTER ===
@api.route('/register', methods=['POST'])
def register():

    user, errors = user_schema.load(request.get_json())

    if errors:
        return jsonify(errors), 422

    user.save()

    return jsonify({'message': 'Registration successful'}), 201

# === LOGIN ===
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


# === RESET PASSWORD ===
@api.route('/resetpassword', methods=['POST'])
def resetpassword():

    data = request.get_json()
    user = User.query.filter_by(email=data.get('email')).first()
    return user_schema.jsonify(user)



# === ENTER NEW PASSWORD ===
@api.route('/users/<int:user_id>/newpassword', methods=['PUT'])
def validate_password(user_id):

    data = request.get_json()
    user = User.query.get(user_id)

    user, errors = user_schema.load(data, instance=user, partial=True)

    if errors:
        return jsonify(errors), 422

    user.save()

    return jsonify({'message': 'Password successfully changed'})



# === INDEX USERS ===
@api.route('/users', methods=['GET'])
def index():
    users = User.query.all()
    return users_schema.jsonify(users)

# === SHOW ===
@api.route('/users/<int:user_id>', methods=['GET'])
def users_show(user_id):
    user = User.query.get(user_id)
    return user_schema.jsonify(user)

# === USER MESSAGES ===
@api.route('/users/<int:user_id>/inbox', methods=['POST'])
@secure_route
def send_message(user_id):
    message, errors = message_schema.load(request.get_json())
    message.sender = g.current_user
    message.receiver = User.query.get(user_id)
    if errors:
        return jsonify(errors), 422
    message.save()
    return message_schema.jsonify(message), 200

# === ME ===
@api.route('/me', methods=['GET'])
@secure_route
def me():
    me_schema = UserSchema(exclude=('inbox.content', 'inbox.updated_at', 'outbox.updated_at', 'outbox.content', 'outbox.receiver.id', 'inbox.sender.id', 'updated_at'))
    return me_schema.jsonify(g.current_user)


# == UPDATE THE USER ===
@api.route('/users/<int:user_id>', methods=['PUT'])
@secure_route
def update(user_id):

    user = User.query.get(user_id)
    user, errors = user_schema.load(request.get_json(), instance=user)
    if errors:
        return jsonify(errors), 422

    user.save()

    return user_schema.jsonify(user)


# === DELETE THE USER ===
@api.route('/users/<int:user_id>', methods=['DELETE'])
@secure_route
def delete(user_id):
    user = User.query.get(user_id)
    user, errors = user_schema.load(request.get_json(), instance=user)


    if errors:
        return jsonify(errors), 422

    user.remove()

    return '', 204

# === ADD TO USER READ LIST ===

@api.route('/users/<int:user_id>/stories/<int:story_id>', methods=['POST'])
@secure_route
def add_new(user_id, story_id):
    user = User.query.get(user_id)
    story = Story.query.get(story_id)
    user.read_list.append(story)

    user.save()

    return user_schema.jsonify(user)

# === DELETE STORY ===
@api.route('/users/<int:user_id>/stories/<int:story_id>', methods=['DELETE'])
@secure_route
def delete_from_reading_list(user_id, story_id):
    user = User.query.get(user_id)
    story = Story.query.get(story_id)

    user.read_list.remove(story)

    user.save()

    return '', 204


# === FOLLOW ROUTE ===
@api.route('/users/<int:user_id>/follow', methods=['POST'])
@secure_route
def follow_users(user_id):
    user = User.query.get(user_id)
    follower = g.current_user
    follower.following.append(user)
    user.save()
    return user_schema.jsonify(user), 201

# === UNFOLLOW ROUTE ===
@api.route('/users/<int:user_id>/unfollow', methods=['POST'])
@secure_route
def unfollow_users(user_id):
    user = User.query.get(user_id)
    unfollow = g.current_user
    unfollow.following.remove(user)
    user.save()
    return user_schema.jsonify(User.query.get(user_id)), 201
