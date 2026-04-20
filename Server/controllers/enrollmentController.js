import mongoose from "mongoose";
import Enrollment from "../models/Enrollment.js";

export const startCourse = async (req, res) => {
  try {
    const { userId, courseId } = req.body;

    if (!userId || !courseId) {
      return res.status(400).json({
        message: "userId and courseId required"
      });
    }

    if (
      !mongoose.Types.ObjectId.isValid(userId) ||
      !mongoose.Types.ObjectId.isValid(courseId)
    ) {
      return res.status(400).json({
        message: "Invalid IDs"
      });
    }

    const existing = await Enrollment.findOne({ userId, courseId });

    if (existing) return res.json(existing);

    const enrollment = new Enrollment({
      userId,
      courseId
    });

    await enrollment.save();

    res.status(201).json(enrollment);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};