import React, {useState, useEffect, FormEvent, ChangeEvent} from "react";
import axios from "axios";

const Login = () => {
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState({
        uid:'',
        pwd:'',
    })

    function onSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        axios.post('http://localhost:3099/api/user/login', formData)
            .then((res) => {
                setMsg(res.data.msg);
            })
            .catch((e) => {
                console.log(e);
            })
    }

    function onChange(e: ChangeEvent<HTMLInputElement>) {
        const {id, value} = e.target;
        setFormData({
            ...formData,
            [id]: value,
        });
    }

    useEffect(() => {
        if (msg !== '') {
            alert(msg);
        }
    }, [msg]);


    return (
        <div className='flex flex-col items-center justify-center min-h-screen '>
            <form className='flex flex-col items-center justify-center min-h screen py-2' onSubmit={onSubmit}>
                <label htmlFor="uid">ID</label>
                <input type="text"
                       className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 bg-black'
                       id='uid'
                       placeholder='ID'
                       onChange={onChange}
                />
                <label htmlFor='pwd'>Password</label>
                <input type="password"
                       className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 bg-black'
                       id='pwd'
                       placeholder='Password'
                       onChange={onChange}
                />
                <button className='p-2 border rounded-lg mb-4'
                        type='submit'>
                    로그인
                </button>
            </form>
        </div>
    );
}

export default Login;