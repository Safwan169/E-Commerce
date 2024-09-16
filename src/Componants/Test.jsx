import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { context } from './Authentication';
import {useQuery} from 'react-query'


const Test = () => {
    const {user}=useContext(context)

    const { refetch,isLoading,isFetching, data } = useQuery({
        queryKey: ['repoData'],

        enabled:!!user?.email,
        queryFn: async() =>{
         const res= await axios.get(`http://localhost:5000/cart?email=${user?.email}`)
         return (res?.data)

        }})
       

    return [data,refetch,isLoading,isFetching,]
};

export default Test;