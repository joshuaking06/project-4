from flask import Blueprint, request, jsonify
from models.story import Story, StorySchema
from lib.secure_route import secure_route
from models.comment import Comment, CommentSchema
from models.user import User, UserSchema

api = Blueprint('comments', __name__)


comments_schema = CommentSchema(many=True)
comment_schema = CommentSchema()


# === CREATE A COMMENT ===
@api.route('/stories/<int:story_id>/comment', methods=['POST'])
def create():

    comment, errors = comment_schema.load(request.get_json())

    if errors:
        return jsonify(errors), 422

    comment.save()

    return comment_schema.jsonify(comment)
