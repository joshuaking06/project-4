from flask import Blueprint
from models.readinglist import ReadingList, ReadingListSchema


readinglist_schema = ReadingListSchema()
readinglists_schema = ReadingListSchema(many=True)

api = Blueprint('readinglists', __name__)

@api.route('/readinglists', methods=['GET'])
def readinglists():
    reading_lists = ReadingList.query.all()
    return readinglists_schema.jsonify(reading_lists)


@api.route('/readinglists/<int:rl_id>', methods=['GET'])
def readinglists_show(rl_id):
    reading_list = ReadingList.query.get(rl_id)
    return readinglist_schema.jsonify(reading_list)
