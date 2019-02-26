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

subreddit = reddit.subreddit('shortstories')

topics_dict = {}

@api.route('/reddit')
def stories_index():
    for submission in subreddit.top(limit=1):
        topics_dict["title"] = submission.title
        topics_dict["score"] = submission.score
        topics_dict["id"] = submission.id
        topics_dict["url"] = submission.url
        topics_dict["comms_num"] = submission.num_comments
        topics_dict["created"] = submission.created
        topics_dict["body"] = submission.selftext
    return jsonify(topics_dict), 200
