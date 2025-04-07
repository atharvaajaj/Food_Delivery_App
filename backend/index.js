require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config(); // Load .env variables

const app = express();
connectDB(); // Connect to MongoDB

app.use(cors());
app.use(express.json()); // To parse JSON request bodies

// 👉 API routes
const foodRoutes = require("./routes/foodRoutes");
app.use("/api/foods", foodRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);



