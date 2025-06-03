import { Router } from "express";
import { createHabit, getHabits } from '../controllers/habits.controller';
import { authMiddleware } from "../middleware/auth.middleware";

const router = Router();

router.post('/', authMiddleware, createHabit);
router.get('/', authMiddleware, getHabits);

export default router;