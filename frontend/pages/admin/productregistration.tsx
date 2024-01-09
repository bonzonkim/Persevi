//상품 등록 페이지
import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import PhotoAddCard from '@/components/PhotoAddCard';

function productregistration() {
	const [msg, setMsg] = useState('');
	const [formData, setFormData] = useState({
		prod_nm: '',
		prod_price: '',
		prod_price1: '',
		prod_price2: '',
		prod_size: '',
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
			.post('http://localhost:3099/api/user/login', formData)
			.then(res => {
				if (res.data.msg !== '') {
					setMsg(res.data.msg);
					if (res.data.msg.includes('환영합니다')) {
						window.location.href = '/';
					}
				}
			})
			.catch(e => {
				console.log(e);
			});
	}

	function onChange(e: ChangeEvent<HTMLInputElement>) {
		setFormData({ ...formData, [e.target.id]: e.target.value });
		// console.log(formData.pwd)
	}

	useEffect(() => {
		if (msg !== '') {
			alert(msg);
		}
	}, [msg]);

	return (
		<form className="persevi-padding">
			<style jsx>{`
				.persevi-padding {
					padding: 0 10% 0 10%;
				}
			`}</style>
			<div className="space-y-12">
				<div className="mt-3 grid grid-cols-1 gap-x-5 gap-y-7 sm:grid-cols-6">
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
								/>
							</div>
						</div>
					</div>

					<div className="col-start-1 col-span-1">
						<label htmlFor="size1" className="block text-sm font-medium text-white">
							사이즈
						</label>
						<div className="mt-2">
							<div className="flex rounded-md ring-1 ring-gray-300 sm:max-w-md">
								<input
									type="text"
									name="size1"
									id="size1"
									className="block flex-1 bg-transparent py-1.5 pl-1 placeholder:text-gray-400 sm:text-sm sm:leading-6 text-white"
								/>
							</div>
						</div>
					</div>
					<div className="col-span-1">
						<label htmlFor="size2" className="block text-sm font-medium text-white">
							&nbsp;
						</label>
						<div className="mt-2">
							<div className="flex rounded-md ring-1 ring-gray-300 sm:max-w-md">
								<input
									type="text"
									name="size2"
									id="size2"
									className="block flex-1 bg-transparent py-1.5 pl-1 placeholder:text-gray-400 sm:text-sm sm:leading-6 text-white"
								/>
							</div>
						</div>
					</div>
					<div className="col-span-1">
						<label htmlFor="size3" className="block text-sm font-medium text-white">
							&nbsp;
						</label>
						<div className="mt-2">
							<div className="flex rounded-md ring-1 ring-gray-300 sm:max-w-md">
								<input
									type="text"
									name="size3"
									id="size3"
									className="block flex-1 bg-transparent py-1.5 pl-1 placeholder:text-gray-400 sm:text-sm sm:leading-6 text-white"
								/>
							</div>
						</div>
					</div>
					<div className="col-span-1">
						<label htmlFor="size4" className="block text-sm font-medium text-white">
							&nbsp;
						</label>
						<div className="mt-2">
							<div className="flex rounded-md ring-1 ring-gray-300 sm:max-w-md">
								<input
									type="text"
									name="size4"
									id="size4"
									className="block flex-1 bg-transparent py-1.5 pl-1 placeholder:text-gray-400 sm:text-sm sm:leading-6 text-white"
								/>
							</div>
						</div>
					</div>
					<div className="col-span-1">
						<label htmlFor="size5" className="block text-sm font-medium text-white">
							&nbsp;
						</label>
						<div className="mt-2">
							<div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-0 focus-within:ring-indigo-600 sm:max-w-md">
								<input
									type="text"
									name="size5"
									id="size5"
									className="block flex-1 bg-transparent py-1.5 pl-1 placeholder:text-gray-400 sm:text-sm sm:leading-6 text-white"
								/>
							</div>
						</div>
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
									placeholder="ex. Black/White/Gray"
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
							/>
						</div>
					</div>
					<div className="col-start-1 col-span-1">
						<label htmlFor="prod_imgs" className="block text-sm font-medium leading-6 text-white">
							제품 사진
						</label>
						<div className="mt-2">
							<div className="mt-2 flex justify-center rounded-lg border border-dashed border-white px-14 py-16">
								<div className="text-center">
									<div className="flex text-sm leading-6 text-white text-5xl">
										<label
											htmlFor="file-upload"
											className="relative cursor-pointer rounded-md bg-transparent font-semibold text-white focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-persevi-blue"
										>
											<span>+</span>
											<input id="file-upload" name="file-upload" type="file" className="sr-only" />
										</label>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-span-1">
						<label htmlFor="prod_imgs" className="block text-sm font-medium leading-6 text-white">
							&nbsp;
						</label>
						<PhotoAddCard />
					</div>
				</div>
			</div>
		</form>
	);
}

export default productregistration;
