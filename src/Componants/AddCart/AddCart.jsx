import React from 'react';
import { useState } from 'react'
import CartStyle from './CartStyle';
import Test from '../Test';


const AddCart = () => {

    const [data,refetch,isLoading,isFetching] = Test()

    console.log('isLoading',isFetching)

    // console.log(data)

    // const datas=[data]

    // const [quantity, setQuantity] = useState(1);


    // const handleIncrease = () => {
    //     setQuantity(quantity + 1);
    // };

    // const handleDecrease = () => {
    //     if (quantity > 1) {
    //         setQuantity(quantity - 1);
    //     }
    // }
    return (
        <div className='lg:flex text-black flex-col lg:p-10 p-0 md:p-4'>

           
         <div className='space-y-5'> 
            {data?.map((d)=><CartStyle data1={d}></CartStyle>)}
          </div>


          {
            isLoading?<div>loading...</div>:'  '
          }
        </div>









    )
}


export default AddCart;