from app import db, ma
from marshmallow import fields
from .base import BaseModel, BaseSchema

readinglists_stories = db.Table('readinglists_stories',
    db.Column('readinglists_id', db.Integer, db.ForeignKey('readinglists.id'), primary_key=True),
    db.Column('stories_id', db.Integer, db.ForeignKey('stories.id'), primary_key=True)
)

class ReadingList(db.Model, BaseModel):

    __tablename__ = 'readinglists'
    title = db.Column(db.String(255), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    user = db.relationship('User', backref='readinglists')
    stories_saved = db.relationship('Story', secondary=readinglists_stories, backref='readinglists')

class ReadingListSchema(ma.ModelSchema, BaseSchema):
    user = fields.Nested('UserSchema', exclude=('email', 'stories', 'readinglists'))

    class Meta:
        model = ReadingList
