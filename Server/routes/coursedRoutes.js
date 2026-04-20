import express from 'express'
import { createCoursed, getCoursed } from '../controllers/courseDController.js';
import { upload } from '../middleware/uploadMiddleware.js';
import { authorizeAdmin, protect } from '../middleware/authMiddleware.js';
const router = express.Router();
router.post("/", protect, authorizeAdmin, upload.single("image"), createCoursed);router.get("/",getCoursed);
export default router;