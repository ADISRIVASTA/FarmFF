import pandas as pd
import numpy as np
from flask import Flask, request, jsonify
from sklearn.linear_model import LinearRegression

app = Flask(__name__)

# Load historical price data
data = pd.read_csv("agro_prices.csv")

# Train ML Model for Price Optimization
def train_model(product_name):
    product_data = data[data["product"] == product_name]
    
    if product_data.empty:
        return None  # No data found

    X = product_data["price"].values.reshape(-1, 1)
    y = product_data["sales"].values
    model = LinearRegression()
    model.fit(X, y)

    # Predict optimal price
    predicted_prices = np.linspace(min(X), max(X), 100).reshape(-1, 1)
    predicted_sales = model.predict(predicted_prices)
    best_price = predicted_prices[np.argmax(predicted_sales)][0]

    return round(best_price, 2)

@app.route("/optimize_price", methods=["GET"])
def optimize_price():
    product_name = request.args.get("product")

    optimized_price = train_model(product_name)

    if optimized_price is None:
        return jsonify({"error": "Product not found"}), 404

    return jsonify({
        "product": product_name,
        "optimized_price": optimized_price
    })

if __name__ == "__main__":
    app.run(debug=True, port=5001)