import React from 'react'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../../../firebase/firebaseConfig.js';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
    const navigate = useNavigate();
    const handleGoogle = async(e) => {
        const provider = new GoogleAuthProvider();
        const data =  await signInWithPopup(auth, provider);
        try {
            const res = await axios.post('http://127.0.0.1:5000/login', {
              username: data.user.email,
              password:'123'
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
    }
  return (
    <button onClick={handleGoogle}>GOOGLE AUTH</button>
  )
}

export default Auth