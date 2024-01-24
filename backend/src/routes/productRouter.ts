import express from 'express';
import { getproductList } from '../controller/productController';
const productRouter = express.Router();

productRouter.get('/list', getproductList);
export default productRouter;
