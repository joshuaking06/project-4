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



@api.route('/reddit')
def reddit_stories_index():
    posts = []
    for submission in subreddit.top(limit=10):
        post = {}
        post["title"] = submission.title
        post["score"] = submission.score
        post["id"] = submission.id
        post["genre"] = submission.link_flair_text
        post["url"] = submission.url
        post["created"] = submission.created
        posts.append(post)
    return jsonify(posts), 200


@api.route('/reddit/posts/<string:post_id>')
def reddit_story_show(post_id):
    submission = reddit.submission(id=post_id)
    post = {}
    post["title"] = submission.title
    post["score"] = submission.score
    post["id"] = submission.id
    post["genre"] = submission.link_flair_text
    post["url"] = submission.url
    post["created"] = submission.created
    post["content"] = submission.selftext
    return jsonify(post)
