// authRoutes.js
import express from "express";
import { register, login, promoteToAdmin } from "../controllers/authController.js";
import { protect, authorizeAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/promote-to-admin", protect, authorizeAdmin, promoteToAdmin);

export default router;
