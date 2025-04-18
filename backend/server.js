import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';

//App config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// Middleware
app.use(cors());
app.use(express.json());

//api end point
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);

//api endpoints
app.get('/', (req, res) => {
    res.send('Hello from the server!');
});

app.listen(port, () => console.log('Server listening on PORT: ' + port));

