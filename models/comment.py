from app import db, ma
from .base import BaseModel, BaseSchema

class Comment(db.Model, BaseModel):

    __tablename__ = 'comments'

    text = db.Column(db.Text(1000), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    usere = db.relationship('User', backref='stories')

class MessageSchema(ma.ModelSchema, BaseSchema):

    class Meta:
        model = Comment
