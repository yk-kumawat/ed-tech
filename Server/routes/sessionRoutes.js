import express from 'express';
import { getSessions, session, getTodaySession } from '../controllers/sessionController.js';
import { authorizeAdmin, protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post("/", protect, authorizeAdmin, session);router.get("/", getSessions);
router.get("/today", getTodaySession); // ✅ ADD THIS

export default router;