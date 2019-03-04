from functools import wraps
import jwt
from flask import request, jsonify, g
from models.user import User
from config.environment import secret

def secure_route(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        print(request.headers)
        if 'Authorization' not in request.headers:
            print('AUTHORIZATION IS NOT HERE')
            return jsonify({'message': 'Unauthorized'}), 401

        token = request.headers.get('Authorization').replace('Bearer ', '')
        payload = jwt.decode(token, secret)
        user = User.query.get(payload.get('sub'))

        if not user:
            return jsonify({'message': 'Unauthorized'}), 401

        g.current_user = user

        return func(*args, **kwargs)

    return wrapper
