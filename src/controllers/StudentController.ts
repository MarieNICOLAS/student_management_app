import { Request, Response } from 'express';

export const getAllStudents = async (req: Request, res: Response) => {
    try {
        res.status(200).json({message: 'Liste des étudiants'});
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération des étudiants'});
    }
};