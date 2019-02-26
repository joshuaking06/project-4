from app import db, ma
from marshmallow import fields
from .base import BaseModel, BaseSchema

class ReadingList(db.Model, BaseModel):

    __tablename__ = 'readinglists'
    title = db.Column(db.String(255), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    user = db.relationship('User', backref='readinglists')


class ReadingListSchema(ma.ModelSchema, BaseSchema):

    class Meta:
        model = ReadingList
