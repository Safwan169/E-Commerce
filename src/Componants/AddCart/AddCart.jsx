import React, { useContext } from 'react';
import { useState } from 'react'
import CartStyle from './CartStyle';
import Test from '../Test';
import Loading from '../Loading/Loading';
import Lottie from 'lottie-react';

import animation from './../../../public/cartLoader.json'
import { context } from '../Authentication';
import TotalAmount from '../TotalAmount/TotalAmount';


const AddCart = () => {

  const [data, , , isFetching] = Test()


  



  return (
    < >


      <div className='lg:flex lg:gap-x-10  w-full text-black  lg:p-10 p-0 md:p-4'>


        <div className=' w-full space-y-5'>
          {data?.map((d) => <CartStyle data1={d}></CartStyle>)}
        </div>
        <div className=' lg:w-[40%] w-full md:w-3/4  md:mx-auto border border-red-500'>
          <TotalAmount></TotalAmount>
        </div>


       
      </div>
    </>









  )
}


export default AddCart;