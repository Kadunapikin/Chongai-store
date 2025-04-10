// import userModel from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";


const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET);
} 

//Route for user login
const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;
        //checking if user exist or not
        const user = await userModel.findOne({email});
        if (!user) {
            return res.json({success: false, msg: "User doesn't exist"});
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            const token = createToken(user._id);
            return res.json({success: true, token});
        }
        else {
            return res.json({success: false, msg: "Invalid password"});
        }
        
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message});
    }
}

//Route for user registration

const registerUser = async (req, res) => {
    try {
        const {name, email, password} = req.body;

        //checking if user already exist or not
        const exist = await userModel.findOne({email});
        if (exist) {
            return res.json({success: false, msg: 'User already exist'});
        }

        //validating email format and strong password
        if (!validator.isEmail(email)) {
            return res.json({success: false, msg: 'Please enter a valid email'});
        }
        if (password.length < 8) {
            return res.json({success: false, msg: 'Please enter a strong password'});
        }
        //hashing password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser =  new userModel({
            name,
            email,
            password: hashedPassword
        })

        const user = await newUser.save();
        const token = createToken(user._id)

        res.json({success: true, token});

    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message});
    }
}

//Route for admin login

const adminLogin = async (req, res) => {

}

export { loginUser, adminLogin, registerUser };