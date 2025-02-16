import express from "express";
import { loginUser, registerUser, adminLogin } from "../controllers/userController.js"; 

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.post('/admin', adminLogin);

// Exports the router for use in the server.js file.  This allows the router to be accessible in other files.  
//Without this, we would have to import and use the router in each file separately.  
//This is a common practice in Node.js applications.  It makes the code more modular and easier to manage.  
//The 'export default' keyword makes the router available for other modules to import.  In this case, it is
export default userRouter;  

