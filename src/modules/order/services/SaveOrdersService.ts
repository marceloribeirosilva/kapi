import { MongoClient } from "mongodb";
import Order from "../entities/Order";

class SaveOrdersService {
    public async execute(client: MongoClient, orders: Order[]) {
        const result = await client.db("teste").collection("vendas").insertMany(orders);        
    }
}

export default SaveOrdersService;