import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { context } from '../Authentication';

const Test = () => {
    const {user}=useContext(context)

    const [loading,setLoading]=useState(true)
    const [data,setData]=useState('')

   useEffect(()=>{
    axios.get('http://localhost:5000/cart',user?.email)
    .then(res=>setData(res.data))
   },[loading])
    return {data,loading,setLoading}
};

export default Test;