import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
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
						<li>
							<Link href="/user/register">
								<span className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white md: :hover:text-blue-500  hover:text-white ">
									회원가입
								</span>
							</Link>
						</li>
						<li>
							<Link href="/user/login">
								<span className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white md: :hover:text-blue-500  hover:text-white ">
									로그인
								</span>
							</Link>
						</li>
					</ul>
				</div>
			</main>
		</nav>
	);
}
