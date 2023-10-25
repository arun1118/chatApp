import React from 'react'
import AddAvatar from "../img/addAvatar.png";

const Register = () => {
  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className="logo">Talkative</span>
            <span className="title">Login</span>
            <form>
                <input type="text" placeholder='Enter your name'/>
                <input type="email" placeholder='Enter your email'/>
                <input type="password" placeholder='Enter your password'/>
                <input type="file" id="file" style={{display: "none"}}/>
                <label htmlFor="file">
                    <img src={AddAvatar} alt="" />
                    <span>Add and Avatar</span>
                </label>
                <button>Register</button>
            </form>
            <p>Already have an account? Login</p>
        </div>
    </div>
  )
}

export default Register