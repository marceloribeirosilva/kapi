import { Request, Response } from 'express';
import GetAllDealsService from '@modules/pipedrive/services/GetAllDealsService';
import PostOrderService from '@modules/bling/service/PostOrderService';
import MyMongo from '@shared/services/MyMongo';
import SaveOrderService from '@modules/order/services/SaveOrderService';
import Order from '@modules/order/entities/Order';

export default class IntegrationController {
  public async dispatchIntegration(
    request: Request,
    response: Response,
  ): Promise<Response> {

    const pipedriveService = new GetAllDealsService();
    const postOrderService = new PostOrderService();
    const saveOrderService = new SaveOrderService();
    const myMongo = new MyMongo();    

    const deals = await pipedriveService.execute();

    const orders: Order[] = [];

    if (deals) {
      for (let deal of deals) {
        const order = await postOrderService.execute(
          {
            nome: deal.org_id.name,
            email: deal.org_id.cc_email,
            valor: deal.value
          }
        )

        if (order) {
          orders.push({
            idPedido: order.idPedido,
            numero: order.numero,
            cliente: deal.org_id.name,
            valor: deal.value,
            data: new Date().toString(),
          })        
        }

      }
    }
        
    const client = await myMongo.openClient();
    
    saveOrderService.execute(client, orders);

    return response.json(orders);
  }
}