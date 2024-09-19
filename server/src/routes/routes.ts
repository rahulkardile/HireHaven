import { Router } from "express";
import Auth from "../controller/auth.controller";

const router = Router();

// Auth Routes
router.post("/auth/login", Auth.login);

export default router;
