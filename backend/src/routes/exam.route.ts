import { Router } from 'express';
import { createExam, getExam } from '../controllers/exam.controller';

const routes = Router();

routes.post('/', createExam);
routes.get('/', getExam);

export default routes;
