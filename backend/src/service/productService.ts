import { AppDataSource } from '../config/db';
import { Product } from '../entity/Product';
import { ProductInterface } from '../model/productModel';
import product from '../test/product/product';

const repository = AppDataSource.getRepository(product);

export async function registerService(productRegisterData: ProductInterface) {
	try {
		// eslint-disable-next-line prefer-const
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
		} = productRegisterData;

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
		const productData = await repository.save(product);

		return productData;
	} catch (e) {
		console.log(e);
		throw new Error('상품등록 실패');
	}
}
// export async function loginService(userLoginData: UserInterface) {
// 	try {
// 		const { uid, pwd } = userLoginData;
//
// 		const loginUser = await repository.findOneBy({ uid: uid });
// 		const loginObj = {
// 			loginUser: loginUser,
// 			msg: ''
// 		};
//
// 		if (!loginUser) {
// 			loginObj.msg = '사용자를 찾을 수 없습니다.';
// 			throw new Error('사용자를 찾을 수 없습니다.');
// 		}
//
// 		const isPwdMatch = await bcrypt.compare(pwd, loginUser.pwd);
//
// 		console.log(`isPwdMatch ${isPwdMatch}`);
// 		if (!isPwdMatch) {
// 			loginObj.msg = '비밀번호가 일치하지 않습니다.';
// 			throw new Error('비밀번호가 일치하지 않습니다.');
// 		}
//
// 		return loginObj;
// 	} catch (e) {
// 		console.log(e);
// 		throw new Error('로그인 실패');
// 	}
// }
