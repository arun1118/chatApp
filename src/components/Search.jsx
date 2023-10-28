import React, { useContext, useState } from 'react'
import { collection, query, where, getDoc, getDocs, setDoc, updateDoc, serverTimestamp } from "firebase/firestore";
import { db } from '../firebase';
import { AuthContext } from '../context/AuthContext';
import { doc } from 'firebase/firestore';

const Search = () => {
  const [userName, setUserName]=useState("");
  const [user, setUser]=useState(null);
  const [err, SetErr]=useState(false);

  const {currentUser}=useContext(AuthContext)

  const handleSearch=async ()=>{
    const q=query(collection(db, "users"), where("displayName", "==", userName));

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc)=>{
        setUser(doc.data()); 
      });  
    }
    catch (error) {
      SetErr(true);
    }
  }

  const handleKeyDown=(e)=>{
    e.code==='Enter' && handleSearch()
  }

  const handleSelectUser=async()=>{
    const combineID = (currentUser.uid > user.uid) ? (currentUser.uid + user.uid) : (user.uid + currentUser.uid);
    console.log("combie id : ", currentUser.uid, user.uid);

    try {
      console.log("searching");
      const res=await getDoc(doc(db, "chats", combineID));
      console.log("res : ",res);
      if(!res.exists()){
        console.log("didnt exist");
        await setDoc(doc(db, "chats", combineID), {messages: []});

        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combineID+".userInfo"] : {uid: user.uid, displayName: user.displayName, photoURL: user.photoURL},
          [combineID+".date"] : serverTimestamp()
        })

        await updateDoc(doc(db, "userChats", user.uid), {
          [combineID+".userInfo"] : {uid: currentUser.uid, displayName: currentUser.displayName, photoURL: currentUser.photoURL},
          [combineID+".date"] : serverTimestamp()
        })
      }
    }
    catch (error) {
      
    }

    setUser(null);
    setUserName("");
  }

  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Find a user' onKeyDown={handleKeyDown} onChange={(e)=> setUserName(e.target.value)} value={userName}/>
      </div>
      {err && <span>User not found!</span>}
      {user && <div className="userChat" onClick={()=> handleSelectUser()}>
        <img src={user.photoURL} alt="" />
        <div className="userChatInfo">
          <span>{user.displayName}</span>
        </div>
      </div>
      }
    </div>
  )
}

export default Search