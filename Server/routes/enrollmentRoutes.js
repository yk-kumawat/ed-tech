import express from "express";
import { startCourse } from "../controllers/enrollmentController.js";

const router = express.Router();

router.post("/", startCourse);

export default router;