import { Router } from 'express';
import integrationRouter from '@modules/integration/infra/http/routers/integration.routes';
import reportRouter from '@modules/report/infra/http/routes/report.routes';

const routes = Router();

routes.use('/integration', integrationRouter)
routes.use('/report', reportRouter)

export default routes;
