import db from '../config/database';

export const getAllStudents = async () => {
    return db('students').select('*');
}