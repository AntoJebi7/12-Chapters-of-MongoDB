import mongoose from 'mongoose';
import Order from './models/order.js';
import Product from './models/product.js';

const url = 'mongodb://localhost:27017/shop'; // Note: include database name in mongoose.connect


(async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to database');
    const new_orders = await Order.find({}).populate('product_id');
    console.log(new_orders);
    const orders = await Order.aggregate([
      {
        $lookup: {
          from: 'Product', // collection name in MongoDB, always lowercase plural unless customized
          localField: 'product_id',
          foreignField: '_id',
          as: 'products'
        }
      }
    ]);

    console.log(orders);
  } catch (err) {
    console.error(err);
  } finally {
    await mongoose.disconnect();
  }
})();
