import { Request, Response } from 'express';
import GetAllDealsService from '@modules/pipedrive/services/GetAllDealsService';
import PostOrderService from '@modules/bling/service/PostOrderService';

export default class IntegrationController {
  public async dispatchIntegration(
    request: Request,
    response: Response,
  ): Promise<Response> {

    const pipedriveService = new GetAllDealsService();
    const postOrderService = new PostOrderService();

    const deals = await pipedriveService.execute();

    if (deals) {
      for (let deal of deals) {
        const order = await postOrderService.execute(
          {
            nome: deal.org_id.name,
            email: deal.org_id.cc_email,
            valor: deal.value
          }
        )

        console.log(order);
      }
    }



    return response.json({ id: "111111" });
  }
}