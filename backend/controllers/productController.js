import e from "express";

//function to add product
// const addProduct = async (req, res) => {
//     try {
//         const { name, description, price, category, subCategory, sizes, bestSeller } = req.body
//         const image1 = req.files.image1[0]
//         const image2 = req.files.image2[0]
//         const image3 = req.files.image3[0]
//         const image4 = req.files.image4[0]

//         console.log(name, description, price, category, subCategory, sizes, bestSeller)
//         console.log(image1, image2, image3, image4)
        
//         res.json({})

//     } catch (error) {
//         console.log(error);
//         res.json({success: false, message: error.message})
//     }
// };
 
//New add product function
const addProduct = async (req, res) => {
    try {
        const { name, description, price, category, subCategory, sizes, bestSeller } = req.body;

        const image1 = req.files?.image1?.[0];
        const image2 = req.files?.image2?.[0];
        const image3 = req.files?.image3?.[0];
        const image4 = req.files?.image4?.[0];

        console.log(name, description, price, category, subCategory, sizes, bestSeller);
        console.log(image1, image2, image3, image4);

        res.json({}); // No validation, just respond

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

//function to list product
const listProduct = async (req, res) => {

};

//function for removing product
const removeProduct = async (req, res) => {

};

//function for single product infor
const singleProduct = async (req, res) => {

}

export { addProduct, listProduct, removeProduct, singleProduct };