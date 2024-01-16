import { Request, Response } from 'express';
import { ProductInterface } from '../model/productModel';
import { productService } from '../service/productService';

export async function productregistration(req: Request<object, object, ProductInterface>, res: Response) {
	try {
		console.log(req.body);
		const prodData = await productService(req.body);
		console.log(prodData);
		res.json({ msg: `상품등록이 완료되었습니다.` });
	} catch (e) {
		console.log(`error: ${e}`);
		res.status(500).json({ error: 'Internal Server Error' });
	}
}
