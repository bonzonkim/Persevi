import axios from 'axios';
import { GetServerSideProps } from 'next';
import { useTable } from 'react-table';

interface Product {
	prod_id: number;
	prod_nm: string;
	prod_price: number;
}

interface ProductsProps {
	products: Product[];
}
export const getServerSideProps: GetServerSideProps<ProductsProps> = async () => {
	try {
		// Persevi 데이터베이스에 HTTP 요청을 보내어 데이터 가져오기
		const response = await axios.get('http://localhost:3099/api/product/list');

		// 받아온 데이터를 Product 배열로 변환
		const products: Product[] = response.data;

		// 로딩된 데이터를 props로 반환
		return { props: { products } };
	} catch (error) {
		// 에러 발생 시 빈 배열을 포함한 props로 반환
		console.error('Error fetching data:', error);
		return { props: { products: [] } };
	}
};
export default function MyTable({ products }) {
	const data = products.map(product => ({
		firstName: product.prod_nm,
		lastName: product.prod_price, // 여기에 필요한 데이터가 있다면 추가
		age: product.prod_id // 여기에 필요한 데이터가 있다면 추가
	}));

	// Columns configuration for the table
	const columns = [
		{ Header: 'Name', accessor: 'firstName' },
		{ Header: 'Price', accessor: 'lastName' },
		{ Header: 'Age', accessor: 'age' }
	];
	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

	return (
		<div>
			<table {...getTableProps} style={{ borderCollapse: 'collapse', width: '100%' }}>
				<thead>
					{headerGroups.map(headerGroup => (
						<tr {...headerGroup.getHeaderGroupProps}>
							{headerGroup.headers.map(column => (
								<th
									{...column.getHeaderProps}
									style={{ background: 'blue', borderBottom: '2px solid black', padding: '8px' }}
								>
									{column.render('Header')}
								</th>
							))}
						</tr>
					))}
				</thead>

				<tbody {...getTableBodyProps}>
					{rows.map(row => {
						prepareRow(row);
						return (
							<tr {...row.getRowProps} style={{ background: 'red', borderBottom: '1px solid black', padding: '8px' }}>
								{row.cells.map(cell => (
									<td {...cell.getCellProps}>{cell.render('Cell')}</td>
								))}
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
