import React from 'react';
import {FaInstagram} from 'react-icons/fa';
import { MdOutlineMailOutline } from "react-icons/md";
import Link from "next/link";


export default function Footer() {
    return (
        <>
            <footer className="bg-persevi-grey py-4">
                <div className='mx-3'>
                    <div className='flex flex-row text-white text-center items-center space-x-5 > *'>
                        <Link href='https://instagram.com' target='_blank'>
                            <FaInstagram/>
                        </Link>
                        <Link href='mailto:flrhyme9@gmail.com' target='_blank'>
                            <MdOutlineMailOutline/>
                        </Link>
                        <span> &copy; 2024 Persevi </span>
                    </div>
                </div>
            </footer>
        </>
    );
}
