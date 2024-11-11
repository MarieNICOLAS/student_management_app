import { Request, Response } from 'express';
import db from '../config/database';

export const getAllStudents = async (req: Request, res: Response) => {
    try {
        const students = await db('students').select('*');
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération des étudiants'});
    }
};