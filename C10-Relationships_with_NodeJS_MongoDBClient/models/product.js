import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    // Define Product fields here
    name : String
});

const Product = mongoose.model('Product', ProductSchema);

export default Product;
