//import { Collection } from 'typeorm';
import { AppDataSource } from '../config/db';
import { Product } from '../entity/Product';
import { ProductInterface } from '../model/productModel';

const repository = AppDataSource.getRepository(Product);

export async function productService(productRegisterData: ProductInterface) {
	try {
		const {
			prod_nm,
			prod_price,
			prod_price1,
			prod_price2,
			prod_size,
			prod_color,
			prod_info,
			// prod_img,
			// prod_img1,
			// prod_img2,
			prod_cate,
			prod_use
		} = productRegisterData;

		const product = repository.create({
			prod_nm,
			prod_price,
			prod_price1,
			prod_price2,
			prod_size,
			prod_color,
			prod_info,
			prod_cate,
			prod_use
		});
		const prodData = await repository.save(product);
		return prodData;
	} catch (e) {
		console.log(`error: ${e}`);
		throw new Error('상품등록 실패');
	}
}
