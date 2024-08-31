from flask import Flask, jsonify, request
from flask_pymongo import PyMongo
from bson.objectid import ObjectId

app = Flask(__name__)

# Configure MongoDB connection
app.config["MONGO_URI"] = "mongodb://localhost:27017/mydatabase"  # Update with your MongoDB URI

mongo = PyMongo(app)

# Helper function to convert ObjectId to string
def object_id_to_str(user):
    user['_id'] = str(user['_id'])
    return user

@app.route('/users', methods=['GET'])
def get_users():
    users = mongo.db.users.find()
    return jsonify([object_id_to_str(user) for user in users])

@app.route('/user/<user_id>', methods=['GET'])
def get_user(user_id):
    user = mongo.db.users.find_one_or_404({'_id': ObjectId(user_id)})
    return jsonify(object_id_to_str(user))

@app.route('/user', methods=['POST'])
def create_user():
    user_data = request.json
    result = mongo.db.users.insert_one(user_data)
    return jsonify({'_id': str(result.inserted_id)})

@app.route('/user/<user_id>', methods=['PUT'])
def update_user(user_id):
    user_data = request.json
    mongo.db.users.update_one({'_id': ObjectId(user_id)}, {'$set': user_data})
    return jsonify({'status': 'User updated'})

@app.route('/user/<user_id>', methods=['DELETE'])
def delete_user(user_id):
    mongo.db.users.delete_one({'_id': ObjectId(user_id)})
    return jsonify({'status': 'User deleted'})

if __name__ == '__main__':
    app.run(debug=True)
