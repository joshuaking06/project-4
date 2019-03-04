from flask import Blueprint, request, jsonify, g
from models.story import Story, StorySchema
from models.user import User, UserSchema
from models.comment import CommentSchema, Comment
from lib.secure_route import secure_route

api = Blueprint('stories', __name__)

stories_schema = StorySchema(many=True, exclude=('content', ))
story_schema = StorySchema()
comment_schema = CommentSchema()
user_schema = UserSchema(exclude=('stories_written', ))


# ================= *** STORY *** =================

# === INDEX ===
@api.route('/stories', methods=['GET'])
def index():
    stories = Story.query.filter_by(finished=True).all()
    return stories_schema.jsonify(stories)


# === SHOW (story_id) --> ALL SINGULAR!!!
@api.route('/stories/<int:story_id>', methods=['GET'])
def show(story_id):
    story = Story.query.get(story_id)
    return story_schema.jsonify(story)


# == CREATE A NEW STORY ===
@api.route('/stories', methods=['POST'])
@secure_route
def create():
    story, errors = story_schema.load(request.get_json())

    if errors:
        return jsonify(errors), 422

    story.creator = g.current_user
    story.save()

    return story_schema.jsonify(story)


# == UPDATE A STORY ===
@api.route('/stories/<int:story_id>', methods=['PUT'])
@secure_route
def update(story_id):
    story = Story.query.get(story_id)

    if story.creator != g.current_user:
        return jsonify({'message': 'Unauthorized'}), 401

    story, errors = story_schema.load(request.get_json(), instance=story)
    if errors:
        return jsonify(errors), 422

    story.creator = g.current_user
    story.save()

    return story_schema.jsonify(story)


# === DELETE A STORY ===
@api.route('/stories/<int:story_id>', methods=['DELETE'])
@secure_route
def delete(story_id):

    story = Story.query.get(story_id)

    story.remove()

    return '', 204


@api.route('/save/<int:story_id>', methods=['POST'])
@secure_route
def save_story(story_id):
    story = Story.query.get(story_id)

    user = g.current_user
    user.read_list.append(story)

    user.save()

    return user_schema.jsonify(user), 201

# ================= *** COMMENT *** ======================


# === CREATE A COMMENT ===
@api.route('/stories/<int:story_id>/comment', methods=['POST'])
@secure_route
def create_comment(story_id):

    comment, errors = comment_schema.load(request.get_json())

    if errors:
        return jsonify(errors), 422

    comment.story = Story.query.get(story_id)
    comment.user = g.current_user

    comment.save()

    return comment_schema.jsonify(comment)

# === DELETE COMMENT ===
@api.route('/stories/<int:story_id>/comments/<int:comment_id>', methods=['DELETE'])
@secure_route
def delete_comment(story_id, comment_id):

    comment = Comment.query.get(comment_id)
    comment, errors = comment_schema.load(request.get_json(), instance=comment)

    if errors:
        return jsonify(errors), 422

    comment.story = Story.query.get(story_id)
    comment.user = g.current_user

    comment.remove()

    return '', 204


# === EDIT COMMENT ===

@api.route('/stories/<int:story_id>/comments/<int:comment_id>', methods=['PUT'])
@secure_route

def update_comment(story_id, comment_id):

    comment = Comment.query.get(comment_id)
    comment, errors = comment_schema.load(request.get_json())

    if errors:
        return jsonify(errors), 422

    comment.story = Story.query.get(story_id)
    comment.user = g.current_user

    comment.save()

    return comment_schema.jsonify(comment)
