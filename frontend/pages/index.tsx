import React, {useState} from 'react';
import axios from 'axios';
import Example from '../components/example'

export default function Home() {
  const [msg, setMsg] = useState('');
  axios.get('http://localhost:3099/hello')
  .then((res) => {
      setMsg(res.data.msg)
    })
  return (
      <>
          <p>{msg}</p>
          <Example/>
      </>
  )
}
