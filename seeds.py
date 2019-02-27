from app import db, app
from models.user import UserSchema
from models.story import Story
from models.comment import Comment
from models.message import Message
from models.readinglist import ReadingList


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
        creator=alessandro,
        likes=[josh]
    )

    db.session.add(inter)

    comment1 = Comment(text='cool story bro', user=josh, story=inter)
    db.session.add(comment1)

    message1 = Message(content='Hello Alex', receiver=josh, sender=alessandro)
    message2 = Message(content='Hello Josh', receiver=alessandro, sender=josh)
    message3 = Message(content='I really eonjed reading your story', receiver=alessandro, sender=josh)
    db.session.add(message1)
    db.session.add(message2)
    db.session.add(message3)

    currentlty_reading = ReadingList(title='My to read list', user=josh, stories_saved=[inter])
    db.session.add(currentlty_reading)




    db.session.commit()
