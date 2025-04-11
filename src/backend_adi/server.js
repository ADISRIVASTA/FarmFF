const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());

app.get("/optimize_price", async (req, res) => {
  const productName = req.query.product;
  
  try {
    const response = await axios.get(`http://127.0.0.1:5001/optimize_price?product=${productName}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch optimized price" });
  }
});

const PORT = 5002;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));