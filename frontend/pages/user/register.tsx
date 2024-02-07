import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

function Register() {
	const [msg, setMsg] = useState('');
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		uid: '',
		pwd: '',
		nickname: '',
		phone: '',
		birth: Date
	});

	// 이메일, 비밀번호, 전화번호 유호화 검사
	function validateEmail(email: string): boolean {
		const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegEx.test(email);
	}

	function validatePassword(pwd: string): boolean {
		const passwordRegEx = /^[A-Za-z0-9]{8,20}$/;
		return passwordRegEx.test(pwd);
	}

	function validatePhone(phone: string): boolean {
		const phoneRegEx = /^[0-9]{3}-[0-9]{4}-[0-9]{4}$/;
		return phoneRegEx.test(phone);
	}

	function onSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		if (validateEmail(formData.email) && validatePassword(formData.pwd) && validatePhone(formData.phone)) {
			axios
				.post('http://localhost:3099/api/user/register', formData)
				.then(res => {
					console.log(res);
					setMsg(res.data.msg);
					console.log(res.data.msg);
					if (res.data.msg.includes('완료되었습니다')) {
						window.location.href = '/';
					}
				})
				.catch(e => {
					console.log(e);
				});
		} else {
			alert('이메일, 비밀번호, 또는 전화번호 형식이 올바르지 않습니다.');
		}
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

	const validation = {
		isPasswordValid: validatePassword(formData.pwd),
		isEmailValid: validateEmail(formData.email),
		isPhoneValid: validatePhone(formData.phone)
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen ">
			<form onSubmit={onSubmit} className="flex flex-col items-center justify-center min-h-screen py-2">
				<label htmlFor="uid">ID</label>
				<input
					className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 bg-persevi-grey text-white"
					id="uid"
					type="text"
					placeholder="ID"
					onChange={onChange}
					required
				/>
				<label htmlFor="pwd">Password</label>
				<span className={`${validation.isPasswordValid ? 'text-persevi-blue' : 'text-red-500'}`}>
					{validation.isPasswordValid
						? '올바른 비밀번호 형식입니다'
						: formData.pwd === ''
							? ''
							: '비밀번호 형식이 올바르지 않습니다'}
				</span>
				<input
					className={`p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 bg-persevi-grey text-white 
					 ${validation.isPasswordValid ? 'border-persevi-blue' : formData.pwd === '' ? 'border-gray-300' : 'border-red-500'}`}
					id="pwd"
					type="password"
					placeholder="영어 대소문자,숫자 8~20글자"
					onChange={onChange}
					required
				/>
				<label htmlFor="name text-white">Name</label>
				<input
					className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 bg-persevi-grey text-white"
					id="name"
					type="text"
					placeholder="이름"
					onChange={onChange}
					required
				/>
				<label htmlFor="email">Email</label>
				<span className={`${validation.isEmailValid ? 'text-persevi-blue' : 'text-red-500'}`}>
					{validation.isEmailValid
						? '올바른 이메일 형식입니다'
						: formData.email === ''
							? ''
							: '이메일 형식이 올바르지 않습니다'}
				</span>
				<input
					className={`p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 bg-persevi-grey text-white ${
						validation.isEmailValid
							? 'border-persevi-blue'
							: formData.email === ''
								? 'border-gray-300'
								: 'border-red-500'
					}`}
					id="email"
					type="text"
					placeholder="이메일"
					onChange={onChange}
					required
				/>
				<label htmlFor="nickname">Nickname</label>
				<input
					className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 bg-persevi-grey text-white"
					id="nickname"
					type="text"
					placeholder="닉네임"
					onChange={onChange}
					required
				/>
				<label htmlFor="phone">Phone</label>
				<span className={`${validation.isPhoneValid ? 'text-persevi-blue' : 'text-red-500'}`}>
					{validation.isPhoneValid
						? '올바른 전화번호 형식입니다'
						: formData.phone === ''
							? ''
							: '전화번호 형식이 올바르지 않습니다.'}
				</span>
				<input
					className={`p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 bg-persevi-grey text-white ${
						validation.isPhoneValid
							? 'border-persevi-blue'
							: formData.phone === ''
								? 'border-gray-300'
								: 'border-red-500'
					}`}
					id="phone"
					type="text"
					placeholder="전화번호"
					onChange={onChange}
					required
				/>
				<label htmlFor="birth">생년월일</label>
				<input
					className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 bg-persevi-grey text-white"
					id="birth"
					type="date"
					onChange={onChange}
					required
				/>

				<button className="p-2 border rounded-lg mb-4 bg-persevi-blue" type="submit">
					회원가입
				</button>
			</form>
		</div>
	);
}

export default Register;
