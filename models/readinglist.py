from app import db, ma
from marshmallow import fields
from .base import BaseModel, BaseSchema

class ReadingList(db.Model, BaseModel):

    __tablename__ = 'readinglists'


class ReadingListSchema(ma.ModelSchema, BaseSchema):

    class Meta:
        model = ReadingList
