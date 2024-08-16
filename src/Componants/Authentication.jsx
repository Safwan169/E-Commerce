import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth";
import { app } from '../../firebase.config';
import { onAuthStateChanged } from "firebase/auth";
import axios from 'axios';

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

// for search data 
const [search,setSearchText]=useState()
const [searchData,setSearchData]=useState()
// console.log(search)

useEffect(() => {
   
    const data1={
        name:search
    }
    console.log(search)

    axios.post(`http://localhost:5000/product`, data1)

      .then(res =>setSearchData(res.data))

  }, [search])

const data={
    signUp,
    signIN,
    GoogleAuth,
    user,
    loading,
    setLoading,
    setSearchText,
    searchData
    
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