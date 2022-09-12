import mongoose from "mongoose";

export interface iProduct extends mongoose.Document {
    SKU: String,
    code: Number,
    name: String,
    description: String,
    pictures: Array<String>,
    price: Number,
    currency: String,
}

const ProductSchema = new mongoose.Schema({
    SKU: {
        type: String
    },
    code: {
        type: Number
    },
    name: {
        type: String
    },
    description: {
        type: String
    },
    pictures: {
        type: String
    },
    price: {
        type: Number
    },
    currency: {
        type: String
    },
});

const Product = mongoose.model<iProduct>("products", ProductSchema);
export default Product;