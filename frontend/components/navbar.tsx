import Link from "next/link";

export default function Navbar() {
    return(
       <div className='gird grid-cols-3 justify-center items-center content-center'>
           <Link href='/user/register'>
               <button
                   className='p-2 border rounded-lg mb-4'>회원가입</button>
           </Link>
           <Link href='/user/login'>
               <button className='p-2 border rounded-lg mb-4'>로그인</button>
           </Link>
           <Link href='/'>
               <button className='p-2 border rounded-lg mb-4'>홈</button>
           </Link>
       </div>
    )
}