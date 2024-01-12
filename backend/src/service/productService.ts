import { AppDataSource } from '../config/db';
import { Product } from '../entity/Product';
// import { ProductInterface } from '../model/productModel';
// import * as buffer from 'buffer';

const repository = AppDataSource.getRepository(Product);

// export async function ProductRegister(productRegisterData: ProductInterface) {
// 	try {
// 		// eslint-disable-next-line prefer-const
// 		const {
// 			prod_nm,
// 			prod_price,
// 			prod_price1,
// 			prod_price2,
// 			prod_size,
// 			prod_color,
// 			prod_info,
// 			prod_img,
// 			prod_img1,
// 			prod_img2,
// 			prod_cate,
// 			prod_use
// 		} = productRegisterData;
//
// 		const product = repository.create({
// 			prod_nm,
// 			prod_price,
// 			prod_price1,
// 			prod_price2,
// 			prod_size,
// 			prod_color,
// 			prod_info,
// 			prod_img,
// 			prod_img1,
// 			prod_img2,
// 			prod_cate,
// 			prod_use
// 		});
// 		const productData = await repository.save(product);
//
// 		return productData;
// 	} catch (e) {
// 		console.log(e);
// 		throw new Error('상품등록 실패');
// 	}
// }
// export async function productList() {
// 	try {
// 		// 모든 상품을 조회하려면 findBy 대신 find 함수를 사용합니다.
// 		const allProducts = await repository.find();
//
// 		return allProducts;
// 	} catch (e) {
// 		console.log(e);
// 		throw new Error('에러 발생');
// 	}
export async function productList() {
	try {
		// Assuming you have a repository with a find function
		const allProducts = await repository.find();
		console.log(allProducts);
		return allProducts;
	} catch (e) {
		console.error(e);
		throw new Error('에러 발생');
	}
}
// try {
// 	const productListData = Product;
//
// 	const listProduct = await repository.find();
// 	// const listProduct2 = await repository.findOperator<buffer>({ prod_img: prod_img });
// 	// const listProduct3 = await repository.find();
// 	const listObj = {
// 		listProduct: listProduct,
// 		msg: ''
// 	};
//
// 	return listObj;
// } catch (e) {
// 	console.log(e);
// 	throw new Error('안떠');
// }
