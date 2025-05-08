import { v2 as cloudinary } from 'cloudinary';
import productModel from '../models/productModel.js';

//function to add product
const addProduct = async (req, res) => {
    try {
        const { name, description, price, category, subCategory, sizes, bestSeller } = req.body        
        const image1 = req.files.image1 && req.files.image1[0]
        const image2 = req.files.image2 && req.files.image2[0]
        const image3 = req.files.image3 && req.files.image3[0]
        const image4 = req.files.image4 && req.files.image4[0]

        //store images in array
        const images = [image1, image2, image3, image4].filter((image) => image !== undefined)

        let imagesUrl = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path, {resource_type: 'image'});
                return result.secure_url
            })
        )

        const productData = {
            name,
            description,
            price: Number(price),
            images: imagesUrl,
            category,
            subCategory,
            sizes: JSON.parse(sizes),
            bestSeller: bestSeller === 'true' ? true : false,
            date: Date.now()
        }

        console.log(productData);

        const product = await productModel.create(productData);
        await product.save();
                
        res.json({success: true, message: 'Product added successfully', product})

    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
    }
};
 
//function to list product
const listProduct = async (req, res) => {
    try {
        const products = await productModel.find({});
        res.json({success: true, products})
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
    }
};

//function for removing product
const removeProduct = async (req, res) => {
    try {
        await productModel.findByIdAndDelete(req.body.id);
        res.json({success: true, message: 'Product removed successfully'})
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
        
    }
};

//function for single product infor
const singleProduct = async (req, res) => {

}

export { addProduct, listProduct, removeProduct, singleProduct };