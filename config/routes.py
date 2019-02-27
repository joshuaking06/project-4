from app import app
<<<<<<< HEAD
from controllers import auth, stories, reddit

app.register_blueprint(auth.api, url_prefix='/api')
app.register_blueprint(stories.api, url_prefix='/api')
=======
from controllers import auth, readinglists, reddit

app.register_blueprint(auth.api, url_prefix='/api')
app.register_blueprint(readinglists.api, url_prefix='/api')
>>>>>>> development
app.register_blueprint(reddit.api, url_prefix='/api')
