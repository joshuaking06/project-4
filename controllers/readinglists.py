# pylint: disable=W0611
from flask import Blueprint, jsonify
from models.story import Story, StorySchema
from models.user import User, UserSchema


story_schema = StorySchema()
user_schema = UserSchema()


api = Blueprint('readinglists', __name__)


@api.route('/users/<int:user_id>', methods=['GET'])
def index(user_id):
    user = User.query.get(user_id)
    return user_schema.jsonify(user)

@api.route('/users/<int:user_id>/stories/<int:story_id>', methods=['POST'])
def add_new(user_id, story_id):
    user = User.query.get(user_id)
    story = Story.query.get(story_id)
    user.read_list.append(story)

    user.save()


    return user_schema.jsonify(user)
