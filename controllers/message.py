from flask import Blueprint, request, jsonify, g
from models.story import Story, StorySchema
from lib.secure_route import secure_route
from models.message import Message, MessageSchema

api = Blueprint('message', __name__)


message_schema = MessageSchema()

# === message show ===
@api.route('/messages/<int:message_id>', methods=['GET'])
@secure_route
def show(message_id):
    message = Message.query.get(message_id)
    return message_schema.jsonify(message), 200
