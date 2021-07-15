import { Router } from 'express';
import ReportController from '../controllers/reportController';

const reportRouter = Router();

const reportController = new ReportController();

reportRouter.get('/', reportController.execute);

export default reportRouter;
