import os
from flask import Blueprint, jsonify
from models.story import StorySchema
import praw



api = Blueprint('reddit', __name__)
story_schema = StorySchema()

reddit = praw.Reddit(client_id=os.getenv('REDDIT_PERSONAL_USE_SCRIPT'), \
                     client_secret=os.getenv('REDDIT_SECRET'), \
                     user_agent=os.getenv('REDDIT_SECRET'), \
                     username=os.getenv('REDDIT_USERNAME'), \
                     password=os.getenv('REDDIT_PASSWORD'))

subreddit = reddit.subreddit('shortstories')



@api.route('/reddit', methods=['GET'])
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


@api.route('/reddit/posts/<string:post_id>', methods=['GET'])
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


@api.route('/redditstorysave/<string:post_id>', methods=['GET'])
def post_reddit_story(post_id):
    submission = reddit.submission(id=post_id)
    post = {}
    post["title"] = submission.title
    post["genre"] = submission.link_flair_text
    post["content"] = submission.selftext


    story, errors = story_schema.load(post)

    if errors:
        return jsonify(errors), 422

    print(story)
    story.save()

    return jsonify({'message': 'Post saved to Database!'}), 201
