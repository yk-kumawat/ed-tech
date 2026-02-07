import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(cors());

// route
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

app.use("/api/auth", authRoutes);

// start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// connect to database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });