import os
from flask import Blueprint, jsonify
from models.story import StorySchema
from models.user import User, UserSchema
import praw
import urllib, json
import urllib.request

api = Blueprint('/giphy', __name__)
giphy_key = os.getenv('GIPHY_KEY')


data = json.loads(urllib.request.urlopen("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key="+giphy_key+"&limit=5").read())


@api.route('/giphy', methods=['GET'])
def giphy():
    return jsonify(data), 201
