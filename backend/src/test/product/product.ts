// Product.ts

class Product {
	private prod_id: number;
	private prod_nm: string;
	private prod_price: string;
	private prod_price1: string;
	private prod_price2: string;
	private prod_size: 'S' | 'M' | 'L' | 'XL' | '2XL' | 'FREE';
	private prod_color?: string;
	private prod_info?: string;
	private prod_img?: Buffer;
	private prod_img1?: Buffer;
	private prod_img2?: Buffer;

	constructor(
		prod_nm: string,
		prod_price: string,
		prod_price1: string,
		prod_price2: string,
		prod_size: 'S' | 'M' | 'L' | 'XL' | '2XL' | 'FREE',
		prod_color?: string,
		prod_info?: string,
		prod_img?: Buffer,
		prod_img1?: Buffer,
		prod_img2?: Buffer
	) {
		this.prod_id = 0; // 혹은 다른 초기값을 할당할 수 있음
		this.prod_nm = prod_nm;
		this.prod_price = prod_price;
		this.prod_price1 = prod_price1;
		this.prod_price2 = prod_price2;
		this.prod_size = prod_size;
		this.prod_color = prod_color;
		this.prod_info = prod_info;
		this.prod_img = prod_img;
		this.prod_img1 = prod_img1;
		this.prod_img2 = prod_img2;
	}

	// 나머지 코드...
}

export default Product;
