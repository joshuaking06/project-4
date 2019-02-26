from flask import Blueprint, jsonify, request, g
from models.user import UserSchema, User
from models.message import MessageSchema, Message
from lib.secure_route import secure_route

api = Blueprint('auth', __name__)
user_schema = UserSchema()
message_schema = MessageSchema()

@api.route('/register', methods=['GET'])
# @secure_route
def register():

    user, errors = user_schema.load
