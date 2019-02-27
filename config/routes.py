from app import app
from controllers import auth, readinglists, reddit

app.register_blueprint(auth.api, url_prefix='/api')
app.register_blueprint(readinglists.api, url_prefix='/api')
app.register_blueprint(reddit.api, url_prefix='/api')
