from app import db, app
from models.user import User
from models.story import Story
from models.message import Message
from models.comment import Comment


with app.app_context():
    db.drop_all()
    db.create_all()

    alessandro =
