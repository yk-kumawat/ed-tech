import express from "express";
import {
  createCourse,
  getCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
} from "../controllers/courseController.js";
import { protect, authorizeAdmin } from "../middleware/authMiddleware.js";
import { upload } from "../middleware/uploadMiddleware.js"; // Import upload middleware

const router = express.Router();

router.route("/")
  .post(protect, authorizeAdmin, upload.single('thumbnail'), createCourse)
  .get(getCourses);

router.route("/:id")
  .get(getCourseById)
  .put(protect, authorizeAdmin, upload.single('thumbnail'), updateCourse)
  .delete(protect, authorizeAdmin, deleteCourse);

export default router;