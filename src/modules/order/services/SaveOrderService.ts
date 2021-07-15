import { MongoClient } from "mongodb";
import Order from "../entities/Order";

class SaveOrderService {
    public async execute(client: MongoClient, orders: Order[]) {
        for (let order of orders) {
            const result = await client.db("teste").collection("vendas").insertOne(order);
            console.log(`New order created with the following id: ${result.insertedId}`);
        }
    }
}

export default SaveOrderService;