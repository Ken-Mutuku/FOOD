import express from 'express';
import { loginUser,registerUser } from '../controllers/userController.js';

const userRouter = express.Router();//create a new router for user

userRouter.post("/register", registerUser);//register user route
userRouter.post("/login", loginUser);//login user route


export default userRouter;
