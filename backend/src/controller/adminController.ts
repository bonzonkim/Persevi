import { Request, Response } from 'express';
import { ProductInterface } from '../model/productModel';
import { Product } from '../entity/Product';
import { AppDataSource } from '../config/db';
// import { productService } from '../service/productService';

const repository = AppDataSource.getRepository(Product);

export async function productregistration(req: Request<object, object, ProductInterface>, res: Response) {
	// try {
	// 	console.log(req.body);
	// 	const prodData = await productService(req.body);
	// 	console.log(prodData);
	// 	res.json({ msg: `상품등록이 완료되었습니다.` });
	// } catch (e) {
	// 	console.log(`error: ${e}`);
	// 	res.status(500).json({ error: 'Internal Server Error' });
	// }
    try {
		const {
			prod_nm,
			prod_price,
			prod_price1,
			prod_price2,
			prod_size,
			prod_color,
			prod_info,
			prod_img,
			prod_img1,
			prod_img2,
			prod_cate,
			prod_use
		} = req.body;

		const product = repository.create({
			prod_nm,
			prod_price,
			prod_price1,
			prod_price2,
			prod_size,
			prod_color,
			prod_info,
			prod_img,
			prod_img1,
			prod_img2,
			prod_cate,
			prod_use
		});

		const prodData = await repository.save(product);

		// return prodData;
		res.json({ msg: '상ㅇ품등록 완료', prod: `${prodData}` });
	} catch (e) {
		console.log(`error: ${e}`);
		throw new Error('상품등록 실패');
	}
}
