import { Request, Response } from 'express';
import { ProductInterface } from '../model/productModel';
import { productList } from '../service/productService';

// export async function register(req: Request<{}, {}, ProductInterface>, res: Response) {
// 	try {
// 		const productData = await ProductRegister(req.body);
// 		console.log(productData);
// 		// res.json({ msg: `${productData.}이 등록되었습니다.` });
// 	} catch (e) {
// 		console.log(e);
// 		res.status(500).json({ error: 'Internal Server Error' });
// 	}
// }
// export async function getproductList(req: Request<{}, ProductInterface>, res: Response) {
// 	const productData = await productList();
// 	const prodName = productData[prod_nm];
// 	console.log(`컨트롤러${prodName}`);
// 	// let test = [];
// 	// console.log(productObj);
//

export async function getproductList(req: Request<{}, ProductInterface>, res: Response) {
	try {
		const productData = await productList();

		// Assuming productData is an array of products
		productData.forEach(product => {
			console.log(`컨트롤러 ${product.prod_nm}`); // Access the product property you want to log
		});

		// Send the product list as a response if needed
		res.json(productData);
	} catch (error) {
		console.error(error);
		res.status(500).send('에러 발생'); // Send an error response
	}
}
