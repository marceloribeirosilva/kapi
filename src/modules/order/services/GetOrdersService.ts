import { MongoClient } from "mongodb";
import Order from "../entities/Order";

class GetOrdersService {
    public async execute(client: MongoClient) {
        const cursor = client.db("teste").collection("vendas").find();
        const results: Order[] = await cursor.toArray();

        return results;
    }
}

export default GetOrdersService;