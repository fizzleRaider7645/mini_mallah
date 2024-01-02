import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

// Real estate API endpoint and key
const API_ENDPOINT = "https://api.example.com/properties";
const API_KEY = process.env.REAL_ESTATE_API_KEY;

app.get("/api/properties", async (req, res) => {
  try {
    const response = await axios.get(API_ENDPOINT, {
      headers: { Authorization: `Bearer ${API_KEY}` },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching data" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
