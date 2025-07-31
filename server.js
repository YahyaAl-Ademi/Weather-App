import express from "express";
import fetch from "node-fetch";  
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());



const PORT = 3000;

// Route to get weather data
app.get("/api/weather", async (req, res) => {
  const city = req.query.city; // city from frontend
  const apiKey = process.env.OPEN_WEATHER_API_KEY;

  if (!city) {
    return res.status(400).json({ error: "City is required" });
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
