import { Router } from 'express';
import IntegrationController from '../controllers/integrationController';

const integrationRouter = Router();

const integrationController = new IntegrationController();

integrationRouter.post('/', integrationController.dispatchIntegration);

export default integrationRouter;
