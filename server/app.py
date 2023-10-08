from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
import numpy as np
import joblib
from joblib import load,dump
import sklearn
from sklearn.ensemble import RandomForestClassifier

app = Flask(__name__)
CORS(app) 

items = [] 

prediction_labels=['(vertigo) Paroymsal  Positional Vertigo', 'AIDS', 'Acne',
 'Alcoholic hepatitis', 'Allergy', 'Arthritis', 'Bronchial Asthma',
 'Cervical spondylosis', 'Chicken pox', 'Chronic cholestasis', 'Common Cold',
 'Dengue' ,'Diabetes ', 'Dimorphic hemmorhoids(piles)' ,'Drug Reaction',
 'Fungal infection', 'GERD', 'Gastroenteritis', 'Heart attack', 'Hepatitis B',
 'Hepatitis C', 'Hepatitis D', 'Hepatitis E', 'Hypertension ',
 'Hyperthyroidism', 'Hypoglycemia', 'Hypothyroidism', 'Impetigo', 'Jaundice',
 'Malaria', 'Migraine', 'Osteoarthristis', 'Paralysis (brain hemorrhage)',
 'Peptic ulcer diseae', 'Pneumonia', 'Psoriasis', 'Tuberculosis', 'Typhoid',
 'Urinary tract infection', 'Varicose veins', 'hepatitis A']


@app.route('/',methods=['GET'])
def fun():
    return("Welcome to the home route")
    

@app.route('/www',methods=['GET'])
def hello_world():
    print('Hello')
    return "<p>Hello<p>"


@app.route('/symptomsdata', methods=['POST'])
def symptoms_data():
    try:
        data = request.json
        rf_model=joblib.load('./rf_model.joblib')
        binarydata=[]
        for i in range(48):
            if(data['data']['symptomsData'][i]['selected']==True):
                binarydata.append(1)

            elif(data['data']['symptomsData'][i]['selected']==False):
                binarydata.append(0)

        binarydata=np.array(binarydata)
        binarydata=binarydata.reshape(1,-1)
        pred=rf_model.predict(binarydata)
        pred=int(pred)
        global prediction_category
        prediction_category=prediction_labels[pred]
        print(prediction_category)
        return jsonify(prediction_category)

    except Exception as e:
        print(str(e))
        return jsonify({"message": "Invalid JSON data"}), 400

@app.route('/diagnosis', methods=['GET'])
def diagnosis():
    try:
        print(prediction_category)
        return jsonify({'disease': prediction_category}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
