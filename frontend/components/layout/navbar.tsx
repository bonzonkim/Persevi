import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
	return (
		<nav className="bg-white border-gray-200 dark:bg-persevi-blue">
			<main className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
				<Link href="/">
					<div className="flex flex-row">
						<Image src="/images/logo.png" width={40} height={20} alt="persevi logo" className="mx-3" />
						<span className="flex items-center space-x-3 rtl:space-x-reverse elf-center text-2xl font-semibold whitespace-nowrap dark:text-white block">
							Persevi
						</span>
					</div>
				</Link>
				<div className="hidden w-full md:block md:w-auto" id="navbar-default">
					<ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-persevi-blue dark:border-gray-700">
						<li>
							<Link href="/user/register">
								<span className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
									회원가입
								</span>
							</Link>
						</li>
						<li>
							<Link href="/user/login">
								<span className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
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
