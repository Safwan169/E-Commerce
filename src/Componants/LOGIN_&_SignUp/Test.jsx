import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { context } from '../Authentication';
import {useQuery} from 'react-query'


const Test = () => {
    const {user}=useContext(context)
    console.log(user?.email)

    const { refetch, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: async() =>{
         const res= await axios.get(`http://localhost:5000/cart?email=${user?.email}`)
         return (res.data)

        }})


//    useEffect(()=>{
//     axios.get('http://localhost:5000/cart',user?.email)
//     .then(res=>setData(res.data))
//    },[loading])
    return [data,refetch]
};

export default Test;