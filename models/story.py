from app import db, ma
from marshmallow import fields
from .base import BaseModel, BaseSchema

class Story(db.Model, BaseModel):

    __tablename__ = 'stories'

    title = db.Column(db.String(255), nullable=False)
    description = db.Column(db.String(255), nullable=False)
    content = db.Column(db.Text(), nullable=False)
    genre = db.Column(db.String(30), nullable=False)
    creator_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    creator = db.relationship('User', backref='stories')

class StorySchema(ma.ModelSchema, BaseSchema):
    creator = fields.Nested('UserSchema')

    class Meta:
        model = Story
