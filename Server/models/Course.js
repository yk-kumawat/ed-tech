// Course.js
import mongoose from "mongoose";

const lectureSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  videoUrl: {
    type: String,
    required: true,
  },
});

const courseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    instructor: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      default: "", // Can be an empty string if no thumbnail is provided
    },
    lectures: [lectureSchema], // Array of lecture sub-documents
  },
  { timestamps: true }
);

export default mongoose.model("Course", courseSchema);