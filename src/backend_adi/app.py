from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import numpy as np
import pickle

# Initialize Flask app
app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load the trained model and scalers
with open('model.pkl', 'rb') as model_file:
    model = pickle.load(model_file)
with open('standscaler.pkl', 'rb') as scaler_file:
    sc = pickle.load(scaler_file)
with open('minmaxscaler.pkl', 'rb') as minmax_file:
    ms = pickle.load(minmax_file)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/predict", methods=['POST'])
def predict():
    try:
        # Determine if the request is JSON (API) or form data (HTML form)
        if request.is_json:
            data = request.get_json()
            input_features = [
                data['Nitrogen'], data['Phosphorus'], data['Potassium'],
                data['Temperature'], data['Humidity'], data['Ph'], data['Rainfall']
            ]
        else:
            input_features = [
                request.form['Nitrogen'], request.form['Phosphorus'], request.form['Potassium'],
                request.form['Temperature'], request.form['Humidity'], request.form['Ph'], request.form['Rainfall']
            ]

        # Convert inputs to float and reshape for the model
        feature_values = np.array([float(x) for x in input_features]).reshape(1, -1)

        # Scale the features
        scaled_features = ms.transform(feature_values)
        final_features = sc.transform(scaled_features)

        # Make prediction
        prediction = model.predict(final_features)
        crop_dict = {
            1: "Rice", 2: "Maize", 3: "Jute", 4: "Cotton", 5: "Coconut",
            6: "Papaya", 7: "Orange", 8: "Apple", 9: "Muskmelon",
            10: "Watermelon", 11: "Grapes", 12: "Mango", 13: "Banana",
            14: "Pomegranate", 15: "Lentil", 16: "Blackgram", 17: "Mungbean",
            18: "Mothbeans", 19: "Pigeonpeas", 20: "Kidneybeans", 21: "Chickpea", 22: "Coffee"
        }
        crop = crop_dict.get(int(prediction[0]), None)

        # Handle image path and result text
        if crop:
            image_path = f"static/{crop}.jpg"  # Ensure images exist in 'static/'
            result = f"{crop} is the best crop to be cultivated right there."
        else:
            image_path = "static/default.jpg"
            result = "Sorry, we could not determine the best crop to be cultivated with the provided data."

        # Return response based on request type
        if request.is_json:
            return jsonify({"crop": crop, "image_url": image_path})
        else:
            return render_template("index.html", result=result, image_url=image_path)

    except Exception as e:
        error_message = str(e)
        if request.is_json:
            return jsonify({"error": error_message}), 500
        else:
            return render_template("index.html", result=f"Error: {error_message}", image_url="static/default.jpg")

# Run the app
if __name__ == "__main__":
    app.run(debug=True)
