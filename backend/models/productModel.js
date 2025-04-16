// import mongoose from "mongoose";

// const productSchema = new mongoose.Schema({
//     name: {type: string, required: true},
//     description: {type: string, required: true},
//     price: {type: number, required: true},
//     image: {type: array, required: true},
//     category: {type: string, required: true},
//     subCategory: {type: string, required: true},
//     size: {type: array, required: true},
//     bestSeller: {type: Boolean},
//     date: {type: number, required: true},
// })

// const productModel = mongoose.models.product || mongoose.model('product', productSchema);

// export default productModel;

//New product model with updated schema
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    images: { type: Array, required: true }, // You had "image" but you're passing "images"
    category: { type: String, required: true },
    subCategory: { type: String, required: true },
    sizes: { type: Array, required: true }, // Changed "size" to match your input "sizes"
    bestSeller: { type: Boolean },
    date: { type: Number, required: true },
});

const productModel = mongoose.models.product || mongoose.model('product', productSchema);

export default productModel;
