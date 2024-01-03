import React, {useState, useEffect, ChangeEvent, FormEventHandler, FormEvent} from 'react';
import axios from "axios";


const Register = () => {
    const [msg, setMsg] = useState('')
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        uid: '',
        pwd: '',
        nickname: '',
        phone: '',
        address: '',
        birth: Date,
    });

    function onSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        axios.post('http://localhost:3099/api/user/register', formData)
            .then((res) => {
                console.log(res)
                setMsg(res.data.msg);
            })
            .catch((e) => {
                console.log(e)
            })
    }

    function onChange(e: ChangeEvent<HTMLInputElement>) {
       setFormData({...formData, [e.target.id]: e.target.value})
        console.log(formData.pwd)
    }
    function validatePassword(pwd: string): boolean {
        const passwordRegEx = /^[A-Za-z0-9]{8,20}$/
        return passwordRegEx.test(pwd);
    }

    useEffect(() => {
        if (msg !== '') {
            alert(msg);
        }
    }, [msg])

    const isPasswordValid = validatePassword(formData.pwd);

    return (
        <div className='flex flex-col items-center justify-center min-h-screen '>
            <form onSubmit={onSubmit} className='flex flex-col items-center justify-center min-h-screen py-2'>
                <label htmlFor='name'>Name</label>
                <input
                    className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 bg-black'
                    id='name'
                    type='text'
                    placeholder='이름'
                    onChange={onChange}
                />
                <label htmlFor='email'>Email</label>
                <input
                    className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 bg-black'
                    id='email'
                    type='text'
                    placeholder='이메일'
                    onChange={onChange}
                />
                <label htmlFor='uid'>ID</label>
                <input
                    className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 bg-black'
                    id='uid'
                    type='text'
                    placeholder='ID'
                    onChange={onChange}
                />
                <label htmlFor='pwd'>Password</label>
                <span
                    className={`password-feedback text-persevi-blue ${isPasswordValid ? 'valid' : 'invalid'}`}
                >{isPasswordValid ? '올바른 비밀번호 형식입니다' : '비밀번호 형식이 올바르지 않습니다'}</span>
                <input
                    className={`p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 bg-black ${isPasswordValid ? 'valid' : 'invalid'}`}
                    id='pwd'
                    type='text'
                    placeholder='비밀번호'
                    onChange={onChange}
                />
                <label htmlFor='nickname'>Nickname</label>
                <input
                    className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 bg-black'
                    id='nickname'
                    type='text'
                    placeholder='닉네임'
                    onChange={onChange}
                />
                <label htmlFor='phone'>Phone</label>
                <input
                    className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 bg-black'
                    id='phone'
                    type='text'
                    placeholder='전화번호'
                    onChange={onChange}
                />
                <label htmlFor='address'>지역</label>
                <input
                    className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 bg-black'
                    id='address'
                    type='text'
                    placeholder='지역'
                    onChange={onChange}
                />
                <label htmlFor='birth'>생년월일</label>
                <input
                    className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 bg-black'
                    id='birth'
                    type='date'
                    onChange={onChange}
                />

                <button
                    className='p-2 border rounded-lg mb-4'
                    type='submit'
                >
                    회원가입
                </button>
            </form>
        </div>
    );
}

export default Register;