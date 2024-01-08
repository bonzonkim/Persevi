// product.test.ts

import Product from './product';
import '../../service/productService';

describe('Product', () => {
	// 10개의 상품을 생성하고 배열에 추가하는 테스트
	it('should create and add 10 products to the array', () => {
		// Given: Product 클래스 인스턴스 생성 및 상품 배열 초기화
		const productArray: Product[] = [];
		const productNames = [
			'Product1',
			'Product2',
			'Product3',
			'Product4',
			'Product5',
			'Product6',
			'Product7',
			'Product8',
			'Product9',
			'Product10'
		];

		// When: 10개의 상품을 생성하여 배열에 추가
		for (let i = 0; i < 10; i++) {
			const product = new Product(
				productNames[i], // 상품명
				'50', // 기본 가격
				'40', // 할인 가격
				'35', // 추가 할인 가격
				'M', // 상품 크기
				'Blue', // 상품 색상
				'Comfortable cotton T-shirt', // 상품 정보
				Buffer.from(`https://balenciaga.dam.kering.com/m/22b91ab0feb814a7/Large-739784TOVA91055_F.jpg?v=2`), // 상품 이미지
				Buffer.from(`https://cdn1-aka.makeshop.co.kr/shopimages/akiiikr/015001000085.jpg?1697155375`) // 추가 이미지 1
			);

			productArray.push(product);
		}

		// Then: 배열에 10개의 상품이 정상적으로 추가되었는지 확인
		// expect(productArray).toHaveLength(10);
		// expect(productArray[0].getProductName()).toBe('Product1');
		// expect(productArray[9].getProductName()).toBe('Product10');
	});
});
