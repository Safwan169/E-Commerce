import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth";
import { app } from '../../firebase.config';
import { onAuthStateChanged } from "firebase/auth";

export const context=createContext()

const provider = new GoogleAuthProvider();

const Authentication = ({children}) => {
const auth = getAuth(app);
const [user,setUser]=useState()
const [loading,setLoading]=useState(true)



const signUp=(email,password)=>{
  return  createUserWithEmailAndPassword(auth, email, password)

}

const signIN=(email,password)=>{
return signInWithEmailAndPassword(auth, email, password)

}
const GoogleAuth=()=>{
    signInWithPopup(auth, provider)
}

useEffect(()=>{
   const unsubscribe= onAuthStateChanged(auth, (user) => {
    setUser(user)

        if (user) {
        
        } else {
          // User is signed out
          // ...
        }
      });
      return unsubscribe

},[!loading])

const data={
    signUp,
    signIN,
    GoogleAuth,
    user,
    loading,
    setLoading
    
}


   

    return (
        <context.Provider value={data}>
            {
                children
            }

        </context.Provider>
   
    );
};

export default Authentication;