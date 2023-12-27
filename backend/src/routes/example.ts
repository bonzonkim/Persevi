import express, { Request, Response } from "express";
import {example} from '../controller/example';

const router = express.Router();

router.get('/test',example); // localhost:3099/api/example/test 로 요청시 controller의 example 불러옴

export default router;