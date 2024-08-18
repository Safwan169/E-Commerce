import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
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
const [load,setLoad]=useState(false)
// console.log(search)

useEffect(() => {
   
    const data1={
        name:search
    }
    console.log(search)

    axios.post(`https://safwan-commrerce.netlify.app/products`)

      .then(res =>{setSearchData(res.data) ,console.log(res.data[0].meta)})
    //   console.log(searchData)
    //   if (searchData) {
        setLoad(true)
    //   }

  }, [search,loading])

const data={
    signUp,
    signIN,
    user,
    loading,
    setLoading,
    setSearchText,
    searchData,
    load,
    search
    
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