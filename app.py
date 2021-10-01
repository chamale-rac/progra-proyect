# .\venv\Scripts\acti
from flask import Flask, request, jsonify
from flask_pymongo import PyMongo, ObjectId
from flask_cors import CORS


app = Flask(__name__)
app.config['MONGO_URI'] = 'mongodb+srv://cls:holaholahola@ayudawebappcluster.0rl3k.mongodb.net/users_db?retryWrites=true&w=majority&ssl=true&ssl_cert_reqs=CERT_NONE'
mongo = PyMongo(app)

CORS(app)

db = mongo.db.user_db

# CREAR


@app.route('/users', methods=['POST'])
def create_users():
    id = db.insert_one({
        'name': request.json['name'],
        'email': request.json['email'],
        'password': request.json['password']
    })
    return jsonify(str(ObjectId(id)))

# OBTENER USUARIOS


@app.route('/users', methods=['GET'])
def get_users():
    users = []
    for doc in db.find():
        users.append({
            '_id': str(ObjectId(doc['_id'])),
            'name': doc['name'],
            'email': doc['email'],
            'password': doc['password']
        })
    return jsonify(users)

# GET UNIQUE USER


@app.route('/user/<id>', methods=['GET'])
def get_user(id):
    user = db.find_one({'_id': ObjectId(id)})
    print(user)
    return jsonify({
        '_id': str(ObjectId(user['_id'])),
        'name': user['name'],
        'email': user['email'],
        'password': user['password']
    })

# ELIMINAR


@app.route('/users/<id>', methods=['DELETE'])
def delete_user(id):
    db.delete_one({'_id': ObjectId(id)})
    return jsonify({'msg': 'Usuario eliminado'})

# ACTUALIZAR


@app.route('/users/<id>', methods=['PUT'])
def update_user(id):
    db.update_one({'_id': ObjectId(id)},
                  {'$set':
                   {
                       'name': request.json['name'],
                       'email': request.json['email'],
                       'password': request.json['password']
                   }
                   })
    return jsonify({'msg': 'Usuario actualizado'})


if __name__ == "__main__":
    app.run(debug=True)
