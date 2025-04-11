import React, { useState } from "react";

const PriceOptimization = () => {
  const [product, setProduct] = useState("");
  const [optimizedPrice, setOptimizedPrice] = useState(null);
  const [profitPercentage, setProfitPercentage] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchOptimizedPrice = async () => {
    if (!product.trim()) {
      alert("Please enter a product name!");
      return;
    }

    setLoading(true);
    setOptimizedPrice(null);
    setProfitPercentage(null);

    try {
      const response = await fetch(`http://localhost:5002/optimize_price?product=${product}`);
      const data = await response.json();

      setOptimizedPrice(data.optimized_price || "Not available");
      setProfitPercentage(data.profit_percentage || "Not available");
    } catch (error) {
      console.error("Error fetching optimized price:", error);
      setOptimizedPrice("Error fetching data");
      setProfitPercentage("Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h1 style={styles.title}>🌾 Agro Product Price Optimization</h1>
        <p style={styles.subtitle}>
          Optimize the price of agricultural products for maximum profit. Check the potential profit margin!
        </p>

        <input
          type="text"
          placeholder="Enter product name (e.g., Wheat, Rice)"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          style={styles.input}
        />

        <button
          onClick={fetchOptimizedPrice}
          style={styles.button}
          onMouseEnter={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseLeave={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
        >
          Get Optimized Price
        </button>

        {loading && <p style={styles.loading}>Fetching data...</p>}

        {!loading && optimizedPrice !== null && (
          <div style={styles.resultBox}>
            <h2 style={styles.resultText}>
              💰 Optimized Price: <span style={styles.price}>Rs {optimizedPrice}</span>
            </h2>
            <h3 style={styles.resultText}>
              {/* 📈 Expected Profit Margin: <span style={styles.profit}>{profitPercentage}%</span> */}
            </h3>
          </div>
        )}

        <div style={styles.tips}>
          <h3>💡 Pricing Tips:</h3>
          <ul style={styles.tipsList}>
            <li>Analyze the demand for your product.</li>
            <li>Consider seasonal trends when setting prices.</li>
            <li>Factor in production and logistics costs.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(135deg, #2d7f5e, #8cd790)",
    padding: "20px",
  },
  box: {
    backgroundColor: "white",
    padding: "50px",
    borderRadius: "15px",
    boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
    width: "40%",
    maxWidth: "600px",
    transition: "transform 0.3s ease-in-out",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#2d7f5e",
  },
  subtitle: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "20px",
  },
  input: {
    width: "90%",
    padding: "15px",
    fontSize: "18px",
    border: "2px solid #ddd",
    borderRadius: "8px",
    marginBottom: "20px",
    textAlign: "center",
  },
  button: {
    width: "95%",
    padding: "15px",
    fontSize: "18px",
    backgroundColor: "#2d7f5e",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "0.3s",
  },
  buttonHover: {
    backgroundColor: "#1f5a41",
  },
  loading: {
    marginTop: "20px",
    fontSize: "18px",
    color: "#2d7f5e",
    fontWeight: "bold",
  },
  resultBox: {
    marginTop: "25px",
    padding: "20px",
    backgroundColor: "#d4edda",
    borderRadius: "10px",
    fontSize: "20px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
  resultText: {
    margin: "10px 0",
  },
  price: {
    color: "#155724",
    fontWeight: "bold",
  },
  profit: {
    color: "#1e3a8a",
    fontWeight: "bold",
  },
  tips: {
    marginTop: "20px",
    textAlign: "left",
  },
  tipsList: {
    listStyleType: "disc",
    paddingLeft: "20px",
    color: "#555",
  },
};

export default PriceOptimization;
