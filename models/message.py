from app import db, ma
from marshmallow import fields
from .base import BaseModel, BaseSchema
from .user import User, UserSchema

class Message(db.Model, BaseModel):

    __tablename__ = 'messages'

    content = db.Column(db.Text(), nullable=False)
    sender_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    receiver_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    sender = db.relationship('User', foreign_keys=[sender_id], backref='outbox')
    receiver = db.relationship('User', foreign_keys=[receiver_id], backref='inbox')

class MessageSchema(ma.ModelSchema, BaseSchema):
    sender = fields.Nested('UserSchema', only=('username', 'id' ))
    receiver = fields.Nested('UserSchema', only=('username', 'id' ))

    class Meta:
        model = Message
