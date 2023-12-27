import axios from "axios";
import {useState} from 'react';
export default function Example() {
  const [msg, setMsg] = useState('');
  axios.get('http://localhost:3099/api/example/test')
      .then((res) => {
        setMsg(res.data.msg);
      })
  return(
      <>
        <h1>THIS IS EXAMPLE COMPONENTS</h1>
        <p>{msg}</p>
      </>
  )
}