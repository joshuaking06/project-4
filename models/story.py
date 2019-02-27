from app import db, ma
from marshmallow import fields
from .base import BaseModel, BaseSchema
from .user import User


stories_users = db.Table('stories_users',
    db.Column('users_id', db.Integer, db.ForeignKey('users.id'), primary_key=True),
    db.Column('stories_id', db.Integer, db.ForeignKey('stories.id'), primary_key=True)
)


class Story(db.Model, BaseModel):

    __tablename__ = 'stories'

    title = db.Column(db.String(255), nullable=False)
    description = db.Column(db.String(255), nullable=True)
    content = db.Column(db.Text(), nullable=False)
    genre = db.Column(db.String(30), nullable=False)
    creator_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    creator = db.relationship('User', backref='stories')
    likes = db.relationship('User', secondary=stories_users, backref='usersliked')

class StorySchema(ma.ModelSchema, BaseSchema):
    creator = fields.Nested('UserSchema')

    class Meta:
        model = Story
