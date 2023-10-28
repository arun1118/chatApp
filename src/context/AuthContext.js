import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext=createContext();

export const AuthContextProvider=({children})=>{
    const [currentUser,setCurrentUser]=useState({});

    useEffect(()=>{
        const initializeCurrentUser=onAuthStateChanged(auth, (user)=>{
            setCurrentUser(user);
            console.log("current user is set :",user);
        })

        return()=>{
            initializeCurrentUser();
        }
    },[])

    return(
    <AuthContext.Provider value={{currentUser}}>
        {children}
    </AuthContext.Provider>
    )
};