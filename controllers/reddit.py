import os
from flask import Blueprint, jsonify, g
from models.story import StorySchema
from models.user import User, UserSchema
from lib.secure_route import secure_route
import praw



api = Blueprint('reddit', __name__)
story_schema = StorySchema()
user_schema = UserSchema()

reddit = praw.Reddit(client_id=os.getenv('REDDIT_PERSONAL_USE_SCRIPT'), \
                     client_secret=os.getenv('REDDIT_SECRET'), \
                     user_agent=os.getenv('REDDIT_SECRET'), \
                     username=os.getenv('REDDIT_USERNAME'), \
                     password=os.getenv('REDDIT_PASSWORD'))

subreddit = reddit.subreddit('shortstories')



@api.route('/reddit/count/<int:count_id>', methods=['GET'])
def reddit_stories_index(count_id):
    if count_id > 980:
        count_id = 980
    posts = []
    for submission in subreddit.hot(limit=count_id):
        post = {}
        post["title"] = submission.title
        post["score"] = submission.score
        post["id"] = submission.id
        post["genre"] = submission.link_flair_text
        post["created"] = submission.created
        posts.append(post)
    return jsonify(posts), 200


@api.route('/reddit/<string:post_id>', methods=['GET'])
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


@api.route('/reddit/save/<string:post_id>', methods=['POST'])
@secure_route
def post_reddit_story(post_id):
    submission = reddit.submission(id=post_id)
    post = {}
    post["title"] = submission.title
    post["genre"] = submission.link_flair_text
    post["content"] = submission.selftext


    story, errors = story_schema.load(post)

    if errors:
        return jsonify(errors), 422

    story.save()

    user = g.current_user
    user.read_list.append(story)

    user.save()

    return user_schema.jsonify(user), 201
