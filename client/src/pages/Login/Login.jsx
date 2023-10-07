import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    let handleSubmit = async (e) => {
      e.preventDefault();
    
      try {
        const res = await axios.post('http://127.0.0.1:5000/login', {
          username: username,
          password: password,
        });
    
        if (res.status === 200) {
          // Handle the success response
          // localStorage.setItem('jwt', JSON.stringify(res.data.jwt))
          document.cookie = `jwt=${res.data.jwt}; expires=` + new Date(Date.now() + 86400000) + '; path=/';
          console.log(res.data.jwt);
          navigate('/')
        } else {
          // Handle the error response
          alert(res.data.message);
        }
      } catch (error) {
        // Handle any unexpected errors
        console.log(error);
        alert('An unexpected error occurred.');
      }
    };

    return (
        <>
            <h2>LOGIN</h2>
            <form onSubmit={handleSubmit}>
                <p>USERNAME</p>
                <input type="text" placeholder='username' name='username' onChange={(e) => setUsername(e.target.value)}/>
                <p>PASSWORD</p>
                <input type="password" placeholder='password' name='password' onChange={(e) => setPassword(e.target.value)} /> <br/>
                <button type="submit">SUBMIT</button>
            </form>
        </>
    )
}

export default Login