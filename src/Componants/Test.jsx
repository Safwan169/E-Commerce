import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { context } from './Authentication';
import {useQuery} from 'react-query'


const Test = () => {
    const {user}=useContext(context)
    console.log(user?.email)

    const { refetch,isLoading,isFetching, data } = useQuery({
        queryKey: ['repoData'],

        enabled:!!user?.email,
        queryFn: async() =>{
         const res= await axios.get(`https://e-commerce-server-side-beta.vercel.app/cart?email=${user?.email}`)
         return (res?.data)

        }})
       

    return [data,refetch,isLoading,isFetching,]
};

export default Test;