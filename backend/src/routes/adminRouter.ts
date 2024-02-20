import express from 'express';
import { productregistration, fileUploadTest } from '../controller/adminController';

const adminRouter = express.Router();

adminRouter.post('/productregistration', productregistration);
adminRouter.post('/fileUploadTest', fileUploadTest);
export default adminRouter;
