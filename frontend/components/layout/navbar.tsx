import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';
import { useCookies } from 'react-cookie';

export default function Navbar() {
	const [userId, setUserId] = useState<string>('');
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [msg, setMsg] = useState('');
	const [cookies, setCookie, removeCookie] = useCookies(['userId']);

	useEffect(() => {
		const storedUserId = cookies.userId;
		console.log(storedUserId);
		console.log(`isLoggedIn : ${isLoggedIn}`);

		if (storedUserId) {
			setUserId(storedUserId);
			setIsLoggedIn(true);
		} else {
			setIsLoggedIn(false);
		}
	}, [isLoggedIn]);

	function logout() {
		//Cookies.remove('userId');
		setIsLoggedIn(false);
		axios.get('http://localhost:3099/api/user/logout').then(res => {
			setMsg(res.data.msg);
			window.location.reload();
		});
	}

	useEffect(() => {
		if (msg !== '') {
			alert(msg);
		}
	});

	return (
		<nav className="border-gray-200 bg-persevi-blue">
			<main className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
				<Link href="/">
					<div className="flex flex-row">
						<Image src="/images/logo.png" width={40} height={20} alt="persevi logo" className="mx-3" />
						<span className="flex items-center space-x-3 rtl:space-x-reverse elf-center text-2xl font-semibold whitespace-nowrap text-white">
							Persevi
						</span>
					</div>
				</Link>
				<div className="hidden w-full md:block md:w-auto" id="navbar-default">
					<ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-persevi-blue">
						{isLoggedIn ? (
							<>
								<li>
									<Link href="/user/mypage">
										<button className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 text-white hover:text-white ">
											{userId} 님의 마이페이지
										</button>
									</Link>
								</li>
								<li>
									<button
										className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white  hover:text-white"
										onClick={logout}
									>
										로그아웃
									</button>
								</li>
							</>
						) : (
							<>
								<li>
									<Link href="/user/register">
										<button className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white  hover:text-white ">
											회원가입
										</button>
									</Link>
								</li>
								<li>
									<Link href="/user/login">
										<button className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white  hover:text-white ">
											로그인
										</button>
									</Link>
								</li>
							</>
						)}
					</ul>
				</div>
			</main>
		</nav>
	);
}
