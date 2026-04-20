// models/Enrollment.js
import mongoose from "mongoose";

const enrollmentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CourseD"
  },
  startDate: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Enrollment", enrollmentSchema);
