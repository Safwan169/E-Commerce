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
const [loading1,setLoading1]=useState(true)



const signUp=(email,password)=>{
  return  createUserWithEmailAndPassword(auth, email, password)

}

const signIN=(email,password)=>{
return signInWithEmailAndPassword(auth, email, password)

}

useEffect(()=>{
   const unsubscribe= onAuthStateChanged(auth, (user) => {
    setUser(user)

    setLoading1(!loading1)

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
const [cartLength,setCartLength]=useState(false)
const [TotalCartItem,setTotalCartItem]=useState()
// console.log(search)

useEffect(() => {
   
   
    // console.log(search)

    axios.post(`http://localhost:5000/products`)

      .then(res =>{setSearchData(res.data) })
    
        setLoad(true)
  

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
    search,
    setCartLength,
    cartLength,
    setTotalCartItem,
    TotalCartItem

    
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