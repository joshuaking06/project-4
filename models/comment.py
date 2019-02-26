from app import db, ma
from .base import BaseModel, BaseSchema

class Comment(db.Model, BaseModel):

    __tablename__ = 'comments'

    text = db.Column(db.Text(1000), nullable=False)


class CommentSchema(ma.ModelSchema, BaseSchema):

    class Meta:
        model = Comment
