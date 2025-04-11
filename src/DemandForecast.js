import React, { useState } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const styles = {
  container: {
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "12px",
    maxWidth: "1000px",
    margin: "20px auto",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  title: {
    fontSize: "26px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#333",
  },
  button: {
    padding: "12px 20px",
    background: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s ease",
    marginBottom: "20px",
  },
  buttonDisabled: {
    background: "#bbb",
    cursor: "not-allowed",
  },
  chartContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
    marginTop: "20px",
  },
  chartBox: {
    flex: "1 1 45%",
    minWidth: "300px",
    height: "400px",
    borderRadius: "8px",
    backgroundColor: "#ffffff",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    padding: "10px",
  },
};

const mockData = [
  { date: "2024-03-01", predicted_demand: 120 },
  { date: "2024-03-02", predicted_demand: 150 },
  { date: "2024-03-03", predicted_demand: 170 },
  { date: "2024-03-04", predicted_demand: 130 },
  { date: "2024-03-05", predicted_demand: 160 },
];

const DemandForecast = () => {
  const [forecastData, setForecastData] = useState(mockData);
  const [loading, setLoading] = useState(false);

  const refreshForecast = () => {
    setLoading(true);
    setTimeout(() => {
      setForecastData(mockData);
      setLoading(false);
    }, 1000);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>📊 Agro Product Demand Forecast</h2>
      <button
        onClick={refreshForecast}
        disabled={loading}
        style={{ ...styles.button, ...(loading ? styles.buttonDisabled : {}) }}
      >
        {loading ? "Loading..." : "Refresh Forecast"}
      </button>

      <div style={styles.chartContainer}>
        {/* Line Chart */}
        <div style={styles.chartBox}>
          <h3 style={styles.title}>Line Chart</h3>
          <ResponsiveContainer width="100%" height="90%">
            <LineChart data={forecastData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip wrapperStyle={{ fontSize: "14px" }} />
              <Legend wrapperStyle={{ fontSize: "14px" }} />
              <Line
                type="monotone"
                dataKey="predicted_demand"
                stroke="#4caf50"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div style={styles.chartBox}>
          <h3 style={styles.title}>Bar Graph</h3>
          <ResponsiveContainer width="100%" height="90%">
            <BarChart data={forecastData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip wrapperStyle={{ fontSize: "14px" }} />
              <Legend wrapperStyle={{ fontSize: "14px" }} />
              <Bar
                dataKey="predicted_demand"
                fill="#007bff"
                barSize={20}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DemandForecast;
