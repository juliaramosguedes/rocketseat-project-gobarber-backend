import { Router } from 'express';
import appointmenstRouter from './appointments.routes';
import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';
const routes = Router();

routes.use('/appointments', appointmenstRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
