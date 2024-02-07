import express from 'express';
import { login, register, getUserId } from '../controller/userController';

const userRouter = express.Router();

userRouter.post('/register', register);
userRouter.post('/login', login);
userRouter.get('/getUserId', getUserId);
// userRouter.get('/logout', logout);

export default userRouter;
