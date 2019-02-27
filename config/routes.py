from app import app
from controllers import auth, stories, reddit

app.register_blueprint(auth.api, url_prefix='/api')
app.register_blueprint(stories.api, url_prefix='/api')
app.register_blueprint(reddit.api, url_prefix='/api')
