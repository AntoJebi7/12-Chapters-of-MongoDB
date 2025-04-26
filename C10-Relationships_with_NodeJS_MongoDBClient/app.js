import { MongoClient } from 'mongodb'; 
const url = 'mongodb://localhost:27017';

(async () => {
    let client;
    client = await MongoClient.connect(url);
    const database = client.db('shop');
        
    if (!database) {
        throw new Error('Failed to connect to the database');
    } else {
        console.log("Connected to database");
    }
    const orders = await database.collection('orders').aggregate([
        {
            $lookup:{
                from: "Products",
                localField: "product_id",
                foreignField: "_id",
                as: "products"
            }
        }
    ]).toArray();
    console.log(orders);
})();
