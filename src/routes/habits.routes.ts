import { Router } from "express";
import { createHabit, getHabits } from '../controllers/habits.controller';

const router = Router();

router.post('/', createHabit);
router.get('/', getHabits);

export default router;