import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
        product_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'  // reference
        },
        amount :String,
        customer_id : mongoose.SchemaTypes.ObjectId,
        // Add other fields here if needed
    });
    
const Order = mongoose.model('Order', OrderSchema);
    
export default Order;  