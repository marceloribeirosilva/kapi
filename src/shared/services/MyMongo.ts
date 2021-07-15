import { MongoClient } from 'mongodb';

interface order {
    id: number,
    number: string,
    cliente: string,
    valor: number,
    date: string,
}

class MyMongo {
    public async openClient() {
        const uri = "mongodb+srv://ribmarc:AFsFH8FRotAW1fk0@cluster0.m2fd3.mongodb.net/teste?retryWrites=true&w=majority";
        const client = new MongoClient(uri);                      

        return await client.connect();
    }    
}

export default MyMongo;