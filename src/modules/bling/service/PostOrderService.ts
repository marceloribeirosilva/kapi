import AppError from '@shared/errors/AppError';
import axios from 'axios';
import transform from 'xml-js';
import qs from 'querystring';
import OrderResponse from '../entities/OrderResponse';

interface OrderRequest {
    nome: string;
    email: string;
    valor: number;
}

class PostOrderService {
    public async execute(order: OrderRequest): Promise<OrderResponse | null> {
        const orderResponse = new OrderResponse();
        const urlBase = process.env.ENDPOINT_BLING;
        const apikey = process.env.APP_SECRET_BLING;
        const config = { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } };

        const orderJson = {
            pedido: {
                cliente: {
                    nome: order.nome,
                    email: order.email,
                },
                Itens: {
                    item: {
                        codigo: "001",
                        descricao: "Desenvolvimento de Software",
                        un: "Pc",
                        qtde: 1,
                        vlr_unit: order.valor
                    }
                }
            }
        }

        const orderXml = transform.json2xml(orderJson, { compact: true, ignoreComment: true, spaces: 2 });

        try {
            const response = await axios.post(`${urlBase}/pedido/json/`, qs.stringify({ apikey, xml: orderXml }), config)

            if (response && response.data && response.data.retorno) {
                const { pedidos } = response.data.retorno;

                if (pedidos) {
                    orderResponse.idPedido = pedidos[0].pedido.idPedido;
                    orderResponse.numero = pedidos[0].pedido.numero;

                }
                console.log('teste');
            }
        } catch (error) {
            throw new AppError('Error add order', 500);
        }

        return orderResponse;
    }
}

export default PostOrderService;