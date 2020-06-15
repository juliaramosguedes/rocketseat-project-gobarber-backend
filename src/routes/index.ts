import { Router } from 'express';
import appointmenstRouter from './appointments.routes';
const routes = Router();

routes.use('/appointments', appointmenstRouter);

export default routes;
