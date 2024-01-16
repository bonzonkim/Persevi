//상품 등록 페이지
import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import SizeButton from '../../components/sizeButton';

function productregistration() {
	const [msg, setMsg] = useState('');
	const [formData, setFormData] = useState({
		prod_nm: '',
		prod_price: '',
		prod_price1: '',
		prod_price2: '',
		prod_size: new Array(),
		prod_color: '',
		prod_info: '',
		prod_img: '',
		prod_img1: '',
		prod_img2: '',
		prod_cate: 0,
		prod_use: 1
	});

	function onSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		axios
			.post('http://localhost:3099/api/admin/productregistration', formData)
			.then(res => {
				if (res.data.msg !== '') {
					setMsg(res.data.msg);
				}
			})
			.catch(e => {
				console.log(e);
			});
	}

	//input태그들
	function onChange(e: ChangeEvent<HTMLInputElement>) {
		setFormData({ ...formData, [e.target.id]: e.target.value });
	}

	//카테고리
	function cataSelect(e: ChangeEvent<HTMLSelectElement>) {
		setFormData({ ...formData, [e.target.id]: Number(e.target.value) });
	}

	//상세 설명
	function infoContentChange(e: ChangeEvent<HTMLTextAreaElement>) {
		setFormData({ ...formData, [e.target.id]: e.target.value });
	}

	function sizeDataUpdate(id: string, isClicked: boolean) {
		const sizes = [...formData.prod_size];

		switch (id) {
			case 'size_xs':
				isClicked ? sizesValueRemove(sizes, 'XS') : sizes.push('XS');
				break;
			case 'size_s':
				isClicked ? sizesValueRemove(sizes, 'S') : sizes.push('S');
				break;
			case 'size_m':
				isClicked ? sizesValueRemove(sizes, 'M') : sizes.push('M');
				break;
			case 'size_l':
				isClicked ? sizesValueRemove(sizes, 'L') : sizes.push('L');
				break;
			case 'size_xl':
				isClicked ? sizesValueRemove(sizes, 'XL') : sizes.push('XL');
				break;
		}

		setFormData({ ...formData, ['prod_size']: sizes });
	}

	//sizes Array에서 특정 값 제거하는 function
	function sizesValueRemove(sizes: string[], value: string) {
		for (let i = 0; i < sizes.length; i++) {
			if (sizes[i] === value) {
				sizes.splice(i, 1);
				i--;
			}
		}
	}

	useEffect(() => {
		if (msg !== '') {
			alert(msg);
		}
	}, [msg]);

	return (
		<form onSubmit={onSubmit} style={{ padding: '0 10% 0 10%' }}>
			<div className="space-y-12">
				<div className="mt-3 grid grid-cols-1 gap-x-5 gap-y-7 sm:grid-cols-6">
					<div className="col-span-1">
						<label htmlFor="prod_cate" className="block text-sm font-medium leading-6 text-white">
							카테고리
						</label>
						<select
							id="prod_cate"
							name="prod_cate"
							className="mt-2 block w-full rounded-md border py-1.5 text-white ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 bg-transparent"
							onChange={cataSelect}
						>
							<option value={0}>Outer</option>
							<option value={1}>Top</option>
							<option value={2}>Bottom</option>
							<option value={3}>Bag</option>
							<option value={4}>Shoes</option>
						</select>
					</div>
					<div className="col-span-full">
						<label htmlFor="prod_nm" className="block text-sm font-medium leading-6 text-white">
							상품명
						</label>
						<div className="mt-2">
							<div className="flex rounded-md ring-1 ring-gray-300 sm:max-w-md">
								<input
									type="text"
									name="prod_nm"
									id="prod_nm"
									className="block flex-1 bg-transparent py-1.5 pl-1 placeholder:text-gray-400 sm:text-sm sm:leading-6 text-white"
									placeholder="상품명"
									onChange={onChange}
								/>
							</div>
						</div>
					</div>

					<div className="col-span-1">
						<label htmlFor="prod_price" className="block text-sm font-medium text-white">
							판매가격(₩)
						</label>
						<div className="mt-2">
							<div className="flex rounded-md ring-1 ring-gray-300 sm:max-w-md">
								<input
									type="text"
									name="prod_price"
									id="prod_price"
									className="block flex-1 bg-transparent py-1.5 pl-1 placeholder:text-gray-400 sm:text-sm sm:leading-6 text-white"
									placeholder="판매가격"
									onChange={onChange}
								/>
							</div>
						</div>
					</div>

					<div className="col-span-1">
						<label htmlFor="prod_price1" className="block text-sm font-medium text-white">
							원가(₩)
						</label>
						<div className="mt-2">
							<div className="flex rounded-md ring-1 ring-gray-300 sm:max-w-md">
								<input
									type="text"
									name="prod_price1"
									id="prod_price1"
									className="block flex-1 bg-transparent py-1.5 pl-1 placeholder:text-gray-400 sm:text-sm sm:leading-6 text-white"
									placeholder="원가"
									onChange={onChange}
								/>
							</div>
						</div>
					</div>

					<div className="col-span-1">
						<label htmlFor="prod_price2" className="block text-sm font-medium text-white">
							판매수익(₩)
						</label>
						<div className="mt-2">
							<div className="flex rounded-md ring-1 ring-gray-300 sm:max-w-md">
								<input
									type="text"
									name="prod_price2"
									id="prod_price2"
									className="block flex-1 bg-transparent py-1.5 pl-1 placeholder:text-gray-400 sm:text-sm sm:leading-6 text-white"
									placeholder="판매수익"
									onChange={onChange}
								/>
							</div>
						</div>
					</div>

					<div className="col-start-1 col-span-1">
						<label htmlFor="size_xs" className="block text-sm font-medium text-white">
							사이즈
						</label>
						<SizeButton id="size_xs" size="XS" dataUpdate={sizeDataUpdate} />
					</div>
					<div className="col-span-1">
						<label htmlFor="size_s" className="block text-sm font-medium text-white">
							&nbsp;
						</label>
						<SizeButton id="size_s" size="S" dataUpdate={sizeDataUpdate} />
					</div>
					<div className="col-span-1">
						<label htmlFor="size_m" className="block text-sm font-medium text-white">
							&nbsp;
						</label>
						<SizeButton id="size_m" size="M" dataUpdate={sizeDataUpdate} />
					</div>
					<div className="col-span-1">
						<label htmlFor="size_l" className="block text-sm font-medium text-white">
							&nbsp;
						</label>
						<SizeButton id="size_l" size="L" dataUpdate={sizeDataUpdate} />
					</div>
					<div className="col-span-1">
						<label htmlFor="size_xl" className="block text-sm font-medium text-white">
							&nbsp;
						</label>
						<SizeButton id="size_xl" size="XL" dataUpdate={sizeDataUpdate} />
					</div>

					<div className="col-span-full">
						<label htmlFor="prod_color" className="block text-sm font-medium leading-6 text-white">
							색상
						</label>
						<div className="mt-2">
							<div className="flex rounded-md ring-1 ring-gray-300 sm:max-w-xl">
								<input
									type="text"
									name="prod_color"
									id="prod_color"
									className="block flex-1 bg-transparent py-1.5 pl-1 placeholder:text-gray-400 sm:text-sm sm:leading-6 text-white"
									placeholder="ex. Black/White/Gray ( 단일 색상일 경우 입력 X )"
									onChange={onChange}
								/>
							</div>
						</div>
					</div>

					<div className="col-span-full">
						<label htmlFor="prod_info" className="block text-sm font-medium leading-6 text-white">
							상세 설명
						</label>
						<div className="mt-2">
							<textarea
								id="prod_info"
								name="prod_info"
								rows={10}
								cols={40}
								className="block bg-transparent rounded-md text-white p-1 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								defaultValue={''}
								placeholder="상세 설명"
								onChange={infoContentChange}
							/>
						</div>
					</div>
					<div className="col-span-5">
						<label htmlFor="img" className="block text-sm font-medium leading-6 text-white">
							제품 사진
						</label>
						<div className=" mt-2 card flex bg-transparent h-60 w-8/12">
							<div className="w-1/2 border-t border-l border-b border-white border-dashed rounded-bl-md rounded-tl-md flex items-center justify-center">
								<div className="text-center">
									<div className="flex text-sm leading-6 text-gray-600">
										<label
											htmlFor="file-upload"
											className="relative cursor-pointer rounded-md bg-transparent font-semibold text-persevi-blue focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
										>
											<span>Upload a file</span>
											<input id="file-upload" name="file-upload" type="file" className="sr-only" />
										</label>
										<p className="pl-1">or drag and drop</p>
									</div>
									<p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
								</div>
							</div>
							<div className="w-1/2 border border-white rounded-br-md rounded-tr-md">이미지 들어가는 공간</div>
						</div>
					</div>
					<div className="col-span-full mt-2 flex justify-end">
						<button className="p-2 rounded-md mb-4 bg-persevi-blue w-20 text-white" type="submit">
							등 록
						</button>
					</div>
				</div>
			</div>
		</form>
	);
}

export default productregistration;
