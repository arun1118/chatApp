import React from 'react'

const Login = () => {
  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className="logo">Talkative</span>
            <span className="title">Register</span>
            <form>
                <input type="email" placeholder='Enter your email'/>
                <input type="password" placeholder='Enter your password'/>
                <button>Login</button>
            </form>
            <p>Don't have an account? Register</p>
        </div>
    </div>
  )
}

export default Login