from app import db, ma
from marshmallow import fields
from .base import BaseModel, BaseSchema

class Story(db.Model, BaseModel):
    
    __tablename__ = 'stories'

    title = db.Column(db.String(255), nullable=False)
    description = db.Column(db.String(255), nullable=False)
    content = db.Column(db.Text(), nullable=False)
    genre = db.Column(db.String(30), nullable=False)

class StorySchema(ma.ModelSchema, BaseSchema):
    class Meta:
        model = Story
