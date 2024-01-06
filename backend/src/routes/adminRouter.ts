import express from 'express';
import { productregistration } from '../controller/adminController';

const adminRouter = express.Router();

adminRouter.post('/productregistration', productregistration);

export default adminRouter;
