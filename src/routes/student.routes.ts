import { Router } from 'express';
import { getAllStudents } from '../controllers/StudentController';

const router = Router();

router.get('/', getAllStudents);

export default router;