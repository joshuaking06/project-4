import os
from app import app
from controllers import auth, stories, reddit, giphy

app.register_blueprint(auth.api, url_prefix='/api')
app.register_blueprint(stories.api, url_prefix='/api')
app.register_blueprint(reddit.api, url_prefix='/api')
app.register_blueprint(giphy.api, url_prefix='/api')

@app.route('/', defaults={'path': ''}) #homepage
@app.route('/<path:path>') #any other path
def catch_all(path):
    if os.path.isfile('/dist' + path):
        return app.send_static_file(path) #if path is file send it back

    return app.send_static_file('index.html') # otherwise send back the index html file
