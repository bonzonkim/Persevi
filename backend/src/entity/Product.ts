import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

enum ProductSize {
	Small = 'S',
	Medium = 'M',
	Large = 'L',
	XLarge = 'XL',
	XXLarge = '2XL',
	FreeSize = 'FREE'
}
@Entity('Product')
export class Product {
	@PrimaryGeneratedColumn()
	prod_id!: number;

	@Column({ type: 'varchar', nullable: false })
	prod_nm!: string;

	@Column({ type: 'varchar', nullable: false })
	prod_price!: string;

	@Column({ type: 'varchar', nullable: false })
	prod_price1!: string;

	@Column({ type: 'varchar', nullable: false })
	prod_price2!: string;

	@Column({ type: 'varchar', default: ProductSize.FreeSize, nullable: false })
	prod_size!: string;

	@Column({ type: 'varchar', nullable: true })
	prod_color?: string;

	@Column({ type: 'varchar', nullable: true })
	prod_info?: string;

	@Column({ type: 'blob', nullable: false })
	prod_img!: Buffer;

	@Column({ type: 'blob', nullable: false })
	prod_img1!: Buffer;

	@Column({ type: 'blob', nullable: false })
	prod_img2?: Buffer;

	@Column({ type: 'int', nullable: false })
	prod_cate?: number;

	@Column({ type: 'int', nullable: false })
	prod_use?: number;
}
