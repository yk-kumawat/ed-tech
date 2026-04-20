import express from "express";
import {getTasks, task} from "../controllers/taskController.js";
import { authorizeAdmin, protect } from "../middleware/authMiddleware.js";
const router = express.Router();
router.post("/", protect, authorizeAdmin, task);
router.get("/", getTasks)

export default router;