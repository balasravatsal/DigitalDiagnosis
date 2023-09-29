from flask import Flask, request, jsonify, send_file
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

items = []

@app.route('/')
def hello_world():
    print('Hello')
    return "<p>Hello<p>"



if __name__ == "__main__":
    app.run(debug=True)
