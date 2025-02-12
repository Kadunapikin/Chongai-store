import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {type: string, required: true},
    description: {type: string, required: true},
    price: {type: number, required: true},
    image: {type: array, required: true},
    category: {type: string, required: true},
    subCategory: {type: string, required: true},
    size: {type: array, required: true},
    bestSeller: {type: Boolean},
    date: {type: number, required: true},
})

const productModel = mongoose.models.product || mongoose.model('product', productSchema);

export default productModel;