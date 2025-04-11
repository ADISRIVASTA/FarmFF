import React, { useState } from "react";

const CropRecommendation = () => {
  const [formData, setFormData] = useState({
    Nitrogen: "",
    Phosphorus: "",
    Potassium: "",
    Temperature: "",
    Humidity: "",
    Ph: "",
    Rainfall: "",
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Send data as JSON
      });
      const data = await response.json(); // Expect JSON response
      setResult(data);
    } catch (error) {
      console.error("Error:", error);
      setResult({ error: "Something went wrong!" });
    }
  };

  return (
    <div
      style={{
        margin: "0 auto",
        padding: "20px",
        maxWidth: "600px",
        borderRadius: "10px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        position: "relative",
        overflow: "hidden",
        zIndex: 1,
      }}
    >
      {/* Moving Gradient Background */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(120deg, #4caf50, #81c784, #a5d6a7)",
          backgroundSize: "200% 200%",
          animation: "moveGradient 5s ease infinite",
          zIndex: -1,
        }}
      ></div>

      <style>
        {`@keyframes moveGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }`}
      </style>

      <h1
        style={{
          textAlign: "center",
          fontSize: "2.5rem",
          color: "#ffffff",
          marginBottom: "20px",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
        }}
      >
        🌱 Crop Recommendation System 🌾
      </h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <input
          type="number"
          name="Nitrogen"
          placeholder="Nitrogen (N)"
          value={formData.Nitrogen}
          onChange={handleChange}
          required
          style={{
            padding: "10px",
            fontSize: "1.2rem",
            border: "1px solid #ccc",
            borderRadius: "5px",
            transition: "box-shadow 0.3s",
          }}
          onFocus={(e) => (e.target.style.boxShadow = "0 0 10px rgba(72, 239, 128, 0.7)")}
          onBlur={(e) => (e.target.style.boxShadow = "none")}
        />
        <input
          type="number"
          name="Phosphorus"
          placeholder="Phosphorus (P)"
          value={formData.Phosphorus}
          onChange={handleChange}
          required
          style={{
            padding: "10px",
            fontSize: "1.2rem",
            border: "1px solid #ccc",
            borderRadius: "5px",
            transition: "box-shadow 0.3s",
          }}
          onFocus={(e) => (e.target.style.boxShadow = "0 0 10px rgba(72, 239, 128, 0.7)")}
          onBlur={(e) => (e.target.style.boxShadow = "none")}
        />
        <input
          type="number"
          name="Potassium"
          placeholder="Potassium (K)"
          value={formData.Potassium}
          onChange={handleChange}
          required
          style={{
            padding: "10px",
            fontSize: "1.2rem",
            border: "1px solid #ccc",
            borderRadius: "5px",
            transition: "box-shadow 0.3s",
          }}
          onFocus={(e) => (e.target.style.boxShadow = "0 0 10px rgba(72, 239, 128, 0.7)")}
          onBlur={(e) => (e.target.style.boxShadow = "none")}
        />
        <input
          type="number"
          name="Temperature"
          placeholder="Temperature (°C)"
          value={formData.Temperature}
          onChange={handleChange}
          required
          style={{
            padding: "10px",
            fontSize: "1.2rem",
            border: "1px solid #ccc",
            borderRadius: "5px",
            transition: "box-shadow 0.3s",
          }}
          onFocus={(e) => (e.target.style.boxShadow = "0 0 10px rgba(72, 239, 128, 0.7)")}
          onBlur={(e) => (e.target.style.boxShadow = "none")}
        />
        <input
          type="number"
          name="Humidity"
          placeholder="Humidity (%)"
          value={formData.Humidity}
          onChange={handleChange}
          required
          style={{
            padding: "10px",
            fontSize: "1.2rem",
            border: "1px solid #ccc",
            borderRadius: "5px",
            transition: "box-shadow 0.3s",
          }}
          onFocus={(e) => (e.target.style.boxShadow = "0 0 10px rgba(72, 239, 128, 0.7)")}
          onBlur={(e) => (e.target.style.boxShadow = "none")}
        />
        <input
          type="number"
          name="Ph"
          placeholder="pH Level"
          value={formData.Ph}
          onChange={handleChange}
          required
          style={{
            padding: "10px",
            fontSize: "1.2rem",
            border: "1px solid #ccc",
            borderRadius: "5px",
            transition: "box-shadow 0.3s",
          }}
          onFocus={(e) => (e.target.style.boxShadow = "0 0 10px rgba(72, 239, 128, 0.7)")}
          onBlur={(e) => (e.target.style.boxShadow = "none")}
        />
        <input
          type="number"
          name="Rainfall"
          placeholder="Rainfall (mm)"
          value={formData.Rainfall}
          onChange={handleChange}
          required
          style={{
            padding: "10px",
            fontSize: "1.2rem",
            border: "1px solid #ccc",
            borderRadius: "5px",
            transition: "box-shadow 0.3s",
          }}
          onFocus={(e) => (e.target.style.boxShadow = "0 0 10px rgba(72, 239, 128, 0.7)")}
          onBlur={(e) => (e.target.style.boxShadow = "none")}
        />
        <button
          type="submit"
          style={{
            padding: "15px",
            fontSize: "1.5rem",
            backgroundColor: "#4caf50",
            color: "#ffffff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s, transform 0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#45a049")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#4caf50")}
          onMouseDown={(e) => (e.target.style.transform = "scale(0.95)")}
          onMouseUp={(e) => (e.target.style.transform = "scale(1)")}
        >
          Predict Crop
        </button>
      </form>
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        {result && (
          <>
            {result.error ? (
              <p style={{ color: "red", fontSize: "1.2rem" }}>{result.error}</p>
            ) : (
              <div>
                <p style={{ fontSize: "1.5rem", color: "#ffffff", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}>
                  Recommended Crop: <strong>{result.crop}</strong>
                </p>
                {result.image_url && (
                  <img
                    src={`http://127.0.0.1:5000/${result.image_url}`}
                    alt="Crop"
                    style={{ maxWidth: "100%", borderRadius: "10px", marginTop: "15px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)" }}
                  />
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default CropRecommendation;
// Nitrogen (N): 90
// Phosphorus (P): 45
// Potassium (K): 60
// Temperature (°C): 25
// Humidity (%): 70
// pH Level: 6.5
// Rainfall (mm): 100