from flask import Blueprint, request, jsonify, g
from models.story import Story, StorySchema
from models.comment import CommentSchema, Comment
from lib.secure_route import secure_route

api = Blueprint('stories', __name__)

stories_schema = StorySchema(many=True)
story_schema = StorySchema()
comment_schema = CommentSchema()


# ================= *** STORY *** =================

# === INDEX ===
@api.route('/stories', methods=['GET'])
def index():
    stories = Story.query.all()
    return stories_schema.jsonify(stories)


# === SHOW (story_id) --> ALL SINGULAR!!!
@api.route('/stories/<int:story_id>', methods=['GET'])
def show(story_id):
    story = Story.query.get(story_id)
    return story_schema.jsonify(story)


# == CREATE A NEW STORY ===
@api.route('/stories', methods=['POST'])
# @secure_route
def create():

    story, errors = story_schema.load(request.get_json())

    if errors:
        return jsonify(errors), 422

    story.save()

    return story_schema.jsonify(story)


# == UPDATE A STORY ===
@api.route('/stories/<int:story_id>', methods=['PUT'])
# @secure_route
def update(story_id):

    story = Story.query.get(story_id)
    story, errors = story_schema.load(request.get_json(), instance=story)


    if errors:
        return jsonify(errors), 422

    story.save()

    return story_schema.jsonify(story)


# === DELETE A STORY ===
@api.route('/stories/<int:story_id>', methods=['DELETE'])
# @secure_route
def delete(story_id):

    story = Story.query.get(story_id)

    story.remove()

    return '', 204


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

    comment = Story.query.get(story_id)
    comment, errors = comment_schema.load(request.get_json(), instance=comment)

    if errors:
        return jsonify(errors), 422

    comment.story = Story.query.get(comment_id)
    comment.user = g.current_user

    comment.remove()

    return '', 204


# === EDIT COMMENT ===

@api.route('/stories/<int:story_id>/comments/<int:comment_id>', methods=['PUT'])
@secure_route

def update_comment(story_id, comment_id):

    comment, errors = comment_schema.load(request.get_json())

    if errors:
        return jsonify(errors), 422

    comment.story = Story.query.get(comment_id)
    comment.user = g.current_user

    comment.save()

    return comment_schema.jsonify(comment)
