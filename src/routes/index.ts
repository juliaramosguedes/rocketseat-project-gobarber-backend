import { Router } from 'express';
import appointmenstRouter from './appointments.routes';
import usersRouter from './users.routes';
const routes = Router();

routes.use('/appointments', appointmenstRouter);
routes.use('/users', usersRouter);

export default routes;
