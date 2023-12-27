import React, {useState} from 'react';
import axios from 'axios';

export default function Home() {
  const [msg, setMsg] = useState('');
  axios.get('http://localhost:3099/hello')
  .then((res) => {
      setMsg(res.data.msg)
    })
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h3>{msg}</h3>
      </div>
    </main>
  )
}
