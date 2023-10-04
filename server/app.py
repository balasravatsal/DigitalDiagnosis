from flask import Flask, request, jsonify, make_response
from flask_cors import CORS
import datetime, jwt
from flask_jwt_extended import create_access_token, JWTManager, set_access_cookies


app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})

app.config['JWT_SECRET_KEY'] = 'your-secret-key'
jwt = JWTManager(app)

items = []

@app.route('/')
def hello_world():
    cookie = request.cookies.get('jwt')
    print(cookie)
    print('Hello')
    return "<p>Hello<p>"


@app.route('/symptomsdata', methods=['POST'])
def symptoms_data():
    try:
        data = request.json
        # print(data)
        return jsonify({"message": "Data received successfully"}), 201
    except Exception as e:
        print(str(e))
        return jsonify({"message": "Invalid JSON data"}), 400


@app.route('/login', methods=['POST'])
def login():
    try:
        username = request.json["username"]
        password = request.json["password"]

        token = create_access_token(identity=username) 

        response = make_response(jsonify(jwt=token))
        set_access_cookies(response, token)

        return response, 200
    
    except Exception as e:
        print(str(e))
        return jsonify({"message": "Internal server error"}), 500

if __name__ == "__main__":
    app.run(debug=True)
