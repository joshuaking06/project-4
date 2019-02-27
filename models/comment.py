from app import db, ma
from marshmallow import fields
from .base import BaseModel, BaseSchema

class Comment(db.Model, BaseModel):

    __tablename__ = 'comments'

    text = db.Column(db.Text(), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    user = db.relationship('User', backref='user_comment')
    story_id = db.Column(db.Integer, db.ForeignKey('stories.id'))
    story = db.relationship('Story', backref='comment')

class CommentSchema(ma.ModelSchema, BaseSchema):
    user = fields.Nested('UserSchema')
    story = fields.Nested('StorySchema')

    class Meta:
        model = Comment
