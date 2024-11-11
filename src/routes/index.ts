import { Router } from "express";
import studentRoutes from '../routes/student.routes';

const router = Router();

router.use('/students', studentRoutes);

export default router;