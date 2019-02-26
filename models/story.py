from app import db
from marshmallow import fields
from .base import BaseModel, BaseSchema

class Story(db.Model, BaseModel):
    title = db.Column(db.String(255), nullable=False)
    description = db.Column(db.String(255), nullable=False)
    content = db.Column(db.Text(), nullable=False)

class StorySchema(ma.ModelSchema, BaseSchema):
    class Meta:
        model = Story
