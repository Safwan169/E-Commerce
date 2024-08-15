import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth";
import { app } from '../../firebase.config';
import { onAuthStateChanged } from "firebase/auth";

export const context=createContext()

const provider = new GoogleAuthProvider();

const Authentication = ({children}) => {
const auth = getAuth(app);
const [user,setUser]=useState()




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
        if (user) {
        setUser(user)
        
        } else {
          // User is signed out
          // ...
        }
      });
      return unsubscribe

},[])

const data={
    signUp,
    signIN,
    GoogleAuth,
    user
    
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