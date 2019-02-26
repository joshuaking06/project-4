from app import db, app
from models.user import User, UserSchema
from models.story import Story
from models.comment import Comment

user_schema = UserSchema()

with app.app_context():
    db.drop_all()
    db.create_all()

    alessandro, errors = user_schema.load({
        'username': 'alessandrolepri',
        'email': 'alessandrolepri@gmail.com',
        'password': 'intermilan99',
        'password_confirmation': 'intermilan99'
    })

    if errors:
        raise Exception(errors)

    db.session.add(alessandro)

    josh, errors = user_schema.load({
        'username': 'joshking',
        'email': 'joshking@gmail.com',
        'password': 'chelseatillidie',
        'password_confirmation': 'chelseatillidie'
    })

    if errors:
        raise Exception(errors)

    db.session.add(josh)



    inter = Story(title='inter', description='a short story about inter',
        content='I always love inter and hated chleseas',
        genre='fantasy',
        creator=alessandro)

    db.session.add(inter)

    comment1 = Comment(text='cool story bro', user=josh, story=inter)
    db.session.add(comment1)

    db.session.commit()
