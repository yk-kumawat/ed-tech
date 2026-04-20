import Enrollment from "../models/Enrollment.js";
import Session from "../models/Session.js";

// CREATE SESSION
export const session = async (req, res) => {
  try {
    const { courseId, day, title, description, videoUrl } = req.body;

    const newSession = new Session({
      courseId,
      day,
      title,
      description,
      videoUrl
    });

    await newSession.save();

    res.status(201).json(newSession);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🔥 GET ALL SESSIONS (FIXED)
export const getSessions = async (req, res) => {
  try {
    const { courseId, userId } = req.query;

    if (!courseId) {
      return res.status(400).json({ message: "courseId required" });
    }

    const sessions = await Session.find({ courseId }).sort({ day: 1 });

    // ✅ ADMIN OR NO USER
    if (!userId || userId === "undefined") {
      return res.json({
        sessions: sessions.map(s => ({
          ...s._doc,
          status: "admin"
        }))
      });
    }

    // ✅ USER FLOW
    const enrollment = await Enrollment.findOne({ userId, courseId });

    if (!enrollment) {
      return res.json({
        sessions: sessions.map(s => ({
          ...s._doc,
          status: "locked"
        }))
      });
    }

    const today = new Date();
    const start = new Date(enrollment.startDate);

    const diffTime = today - start;
    const currentDay =
      Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;

    const updatedSessions = sessions.map(session => {
      let status = "locked";

      if (session.day < currentDay) status = "completed";
      else if (session.day === currentDay) status = "active";

      return {
        ...session._doc,
        status
      };
    });

    const total = sessions.length;
    const completed = sessions.filter(s => s.day < currentDay).length;

    const progress = Math.floor((completed / total) * 100);

    res.json({
      currentDay,
      progress,
      sessions: updatedSessions
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET TODAY SESSION
export const getTodaySession = async (req, res) => {
  try {
    const { userId, courseId, day } = req.query;

    const enrollment = await Enrollment.findOne({ userId, courseId });

    if (!enrollment) {
      return res.status(404).json({ message: "Course not started" });
    }

    const today = new Date();
    const start = new Date(enrollment.startDate);

    const diffTime = today - start;
    const todayDay =
      Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;

    const selectedDay = day ? Number(day) : todayDay;

    const session = await Session.findOne({
      courseId,
      day: selectedDay
    });

    res.json({
      day: selectedDay,
      todayDay,
      session
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};