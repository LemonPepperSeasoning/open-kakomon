import { Router } from 'express';
import exam from './exam.route';

const routes = Router();

routes.use('/exam', exam);

export default routes;