from flask import Flask, request, jsonify, send_file
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

items = []

@app.route('/www')
def hello_world():
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



if __name__ == "__main__":
    app.run(debug=True)
