import {Request, Response} from 'express';
import prisma from '../lib/prisma';

let habits: any[] = [];
let userId: string | null = null;

export const createHabit = async (req: Request, res: Response) => {
    const {title, frequency} = req.body;
    const user = req.user;

    if (!title || !frequency || !user?.uid) {
        return res.status(400).json({message: 'Missing required fields'});
    }
    try {
    const newHabit = await prisma.habit.create({
        data: {
        title,
        frequency,
        userId: user.uid
        }
    });

    res.status(201).json(newHabit);
} catch (error) {
    console.error('Error creating habit:', error);
    return res.status(500).json({message: 'Internal server error'});
}
};

export const getHabits = async (req: Request, res: Response) => {
    const user = req.user;
    if (!user?.uid) {
        return res.status(400).json({message: 'Unauthorized'});
    }
    try {
    const habits = await prisma.habit.findMany({
        where: { userId: user.uid}
    });
    res.status(200).json(habits);

    } catch (error) {

    console.error('Error fetching habits:', error);
    return res.status(500).json({message: 'Internal server error'});

    }
};