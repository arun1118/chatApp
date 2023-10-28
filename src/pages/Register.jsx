import React, { useState } from 'react'
import AddAvatar from "../img/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth,storage, db } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Register = () => {
  const navigate=useNavigate();

  const [err,setErr]=useState(false);
  
  const handleSubmit=async (e)=>{
    e.preventDefault();
    const displayName=e.target[0].value;
    const email=e.target[1].value;
    const password=e.target[2].value;
    const file=e.target[3].files[0];

    try {
      const res=await createUserWithEmailAndPassword(auth, email, password);
      console.log(res);
      const storageRef = ref(storage, displayName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      
      uploadTask.on('state_changed'
      ,(snapshot)=>{
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch(snapshot.state){
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
          default:
            break;
        }
      }
      ,(error)=>{
        setErr(true);
      }
      ,()=>{
        getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL)=>{
        console.log('File available at', downloadURL);
        await updateProfile(res.user, {displayName, photoURL: downloadURL});
        await setDoc(doc(db, "users", res.user.uid), {uid: res.user.uid, displayName, email, photoURL : downloadURL})
        await setDoc(doc(db, "userChats", res.user.uid), {})
        navigate("/");
      });
      }
      );

      
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
                <input type="text" placeholder='Enter your name'/>
                <input type="email" placeholder='Enter your email'/>
                <input type="password" placeholder='Enter your password'/>
                <input type="file" id="file" style={{display: "none"}}/>
                <label htmlFor="file">
                    <img src={AddAvatar} alt="" />
                    <span>Add and Avatar</span>
                </label>
                <button>Register</button>
                {err && <sapn>Something went wrong!</sapn>}
            </form>
            <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
    </div>
  )
}

export default Register