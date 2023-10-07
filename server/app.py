from flask import Flask, request, jsonify, send_file, make_response
from flask_cors import CORS
import numpy as np
import joblib
from joblib import load,dump
from flask_jwt_extended import JWTManager, create_access_token, set_access_cookies

app = Flask(__name__)
CORS(app)

app.config['JWT_SECRET_KEY'] = 'your-secret-key'
jwt = JWTManager(app)

items = []

# rf_model=joblib.load('./rf_model.joblib')


@app.route('/')
def fun():
    return("Welcome to the home route")
    

@app.route('/www')
def hello_world():
    print('Hello')
    return "<p>Hello<p>"


@app.route('/symptomsdata', methods=['POST'])
def symptoms_data():
    try:
        data = request.json
        print(data)
        data=np.array(data)

        binarydata=[]
        for i in range(len(data)):
            if(data[i]=='yes'):
                binarydata.append(1)
            elif(data[i]=='no'):
                binarydata.append(0)
        binarydata=np.array(binarydata)

        binarydata=binarydata.reshape(1,-1)
        pred=rf_model.predict(binarydata)

        if(pred==0):
            return '(vertigo) Paroymsal  Positional Vertigo'
        elif(pred==1):
            return 'AIDS'
        elif(pred==2):
            return 'Acne'
        elif(pred==3):
            return 'Alcoholic hepatitis'
        elif(pred==4):
            return 'Allergy'
        elif(pred==5):
            return 'Arthritis'
        elif(pred==6):
            return 'Bronchial Asthma'
        elif(pred==7):
            return 'Cervical spondylosis'
        elif(pred==8):
            return 'Chicken pox'
        elif(pred==9):
            return 'Chronic cholestasis'
        elif(pred==10):
            return 'Common Cold'
        elif(pred==11):
            return 'Dengue'
        elif(pred==12):
            return 'Diabetes'
        elif(pred==13):
            return 'Dimorphic hemmorhoids(piles)'
        elif(pred==14):
            return 'Drug Reaction'
        elif(pred==15):
            return 'Fungal infection'
        elif(pred==16):
            return 'GERD'
        elif(pred==17):
            return 'Gastroenteritis'
        elif(pred==18):
            return 'Heart attack'
        elif(pred==19):
            return 'Hepatitis B'
        elif(pred==20):
            return 'Hepatitis C'
        elif(pred==21):
            return 'Hepatitis D'
        elif(pred==22):
            return 'Hepatitis E'
        elif(pred==23):
            return 'Hypertension'
        elif(pred==24):
            return 'Hyperthyroidism'
        elif(pred==25):
            return 'Hypoglycemia'
        elif(pred==26):
            return 'Hypothyroidism'
        elif(pred==27):
            return 'Impetigo'
        elif(pred==28):
            return 'Jaundice'
        elif(pred==29):
            return 'Malaria'
        elif(pred==30):
            return 'Migraine'
        elif(pred==31):
            return 'Osteoarthristis'
        elif(pred==32):
            return 'Paralysis(brain hemorrhage)'
        elif(pred==33):
            return 'Peptic ulcer diseae'
        elif(pred==34):
            return 'Pneumonia'
        elif(pred==35):
            return 'Psoriasis'
        elif(pred==36):
            return 'Tuberculosis'
        elif(pred==37):
            return 'Typhoid'
        elif(pred==38):
            return 'Urinary tract infection'
        elif(pred==39):
            return 'Varicose veins'
        elif(pred==40):
            return 'hepatitis A'
        else:
            return "Consult your nearest doctor!"


        return jsonify({"message": "Data received successfully"}), 201
    except Exception as e:
        print(str(e))
        return jsonify({"message": "Invalid JSON data"}), 400


@app.route('/diagnosis', methods=['GET'])
def diagnosis():
    try:
#         data = request.json
#         symptoms = data.get('symptoms', [])  # Assuming symptoms are sent as a list
#         disease_name = diagnose_disease(symptoms)
        return jsonify({'disease': "result_disease_name"}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500


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
