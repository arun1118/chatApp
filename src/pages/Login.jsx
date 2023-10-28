import React, { useState } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth"; 
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { Link } from 'react-router-dom';

const Login = () => {
  const navigate=useNavigate();

  const [err,setErr]=useState(false);
  
  const handleSubmit=async (e)=>{
    e.preventDefault();
    const email=e.target[0].value;
    const password=e.target[1].value;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } 
    catch (error) {
      setErr(true);
    }
  }

  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className="logo">Talkative</span>
            <span className="title">Register</span>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder='Enter your email'/>
                <input type="password" placeholder='Enter your password'/>
                <button>Login</button>
                {err && <span>Something went wrong!</span>}
            </form>
            <p>Don't have an account? <Link to="/register">Register</Link></p>
        </div>
    </div>
  )
}

export default Login