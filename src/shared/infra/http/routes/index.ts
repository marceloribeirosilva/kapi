import { Router } from 'express';
import integrationRouter from '@modules/integration/infra/http/routers/integration.routes';

const routes = Router();

routes.use('/integration', integrationRouter)

export default routes;
