//index.js
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import courseRoutes from "./routes/courseRoutes.js";
import path from "path"; // Import path module
import fs from "fs"; // Import fs module for file system operations
import coursedRoutes from './routes/coursedRoutes.js'
import sessionRoutes from './routes/sessionRoutes.js'
import taskRoutes from './routes/taskRoutes.js'
import enrollmentRoutes from "./routes/enrollmentRoutes.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Create uploads folder if it doesn't exist
const uploadsDir = path.join(process.cwd(), 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}



// middleware
app.use(express.json());
app.use(cors());

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static(uploadsDir));

// route
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

app.use("/api/auth", authRoutes);
// Pass the upload middleware to courseRoutes if needed globally,
// or apply it directly in courseRoutes for specific endpoints.
app.use("/api/courses", courseRoutes); 

app.use("/api/coursesd",coursedRoutes);
app.use("/api/session",sessionRoutes);
app.use("/api/task",taskRoutes);
app.use("/api/enroll", enrollmentRoutes);

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