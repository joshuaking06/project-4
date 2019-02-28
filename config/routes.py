from app import app
from controllers import auth, stories, reddit, giphy

app.register_blueprint(auth.api, url_prefix='/api')
app.register_blueprint(stories.api, url_prefix='/api')
app.register_blueprint(reddit.api, url_prefix='/api')
app.register_blueprint(giphy.api, url_prefix='/api')
