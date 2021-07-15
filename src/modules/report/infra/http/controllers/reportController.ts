import { Request, Response } from 'express';
import MyMongo from '@shared/services/MyMongo';
import GetOrdersService from '@modules/order/services/GetOrdersService';
import SumOrdersByDayService from '@modules/report/services/SumOrdersByDayService';

export default class ReportController {
    public async execute(request: Request,response: Response,): Promise<Response> {
        const getOrdersService = new GetOrdersService();
        const sumOrdersByDayService = new SumOrdersByDayService();
        const myMongo = new MyMongo();

        const client = await myMongo.openClient();

        const report = await getOrdersService.execute(client);

        const reportByDay = await sumOrdersByDayService.execute(report);

        client.close();

        return response.json(reportByDay);
    }
}