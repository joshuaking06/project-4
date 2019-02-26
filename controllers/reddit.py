from flask import Blueprint, jsonify, request, g
from models.story import Story, StorySchema
import requests
import praw
import os

api = Blueprint('reddit', __name__)


reddit = praw.Reddit(client_id=os.getenv('REDDIT_PERSONAL_USE_SCRIPT'), \
                     client_secret=os.getenv('REDDIT_SECRET'), \
                     user_agent=os.getenv('REDDIT_SECRET'), \
                     username=os.getenv('REDDIT_USERNAME'), \
                     password=os.getenv('REDDIT_PASSWORD'))

@api.route('/reddit')
def stories_index():
    print('hello')
    return 'hello', 200
