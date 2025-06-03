import {Request, Response} from 'express';
import prisma from '../lib/prisma';

let habits: any[] = [];

export const createHabit = async (req: Request, res: Response) => {
    const {title, frequency} = req.body;

    if (!title || !frequency) {
        return res.status(400).json({message: 'Title and frequency are required.'});
    }
    try {
    const newHabit = await prisma.habit.create({
        data: {
        title,
        frequency,
        }
    });

    res.status(201).json(newHabit);
} catch (error) {
    console.error('Error creating habit:', error);
    return res.status(500).json({message: 'Internal server error'});
}
};

export const getHabits = async (req: Request, res: Response) => {
    try {
    const habits = await prisma.habit.findMany();
    res.status(200).json(habits);

    } catch (error) {

    console.error('Error fetching habits:', error);
    return res.status(500).json({message: 'Internal server error'});

    }
};