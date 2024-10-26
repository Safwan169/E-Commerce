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


  const {cartLength}=useContext(context)



  return (
    < >


      <div className='lg:flex lg:gap-x-3 lg:px-40  w-full text-black  lg:p-10 p-0 md:p-4'>


        <div className=' w-full space-y-5'>
          {data?.map((d) => <CartStyle data1={d}></CartStyle>)}
        </div>
        <div className=' lg:w-[50%] w-full md:w-3/4  md:mx-auto '>
          <TotalAmount></TotalAmount>
        </div>


          {
            cartLength ? <div className='  bg-opacity-25 fixed top-0 bg-slate-900  font-white left-1/2 -translate-x-1/2   h-svh w-full    mx-auto items-center justify-center  text-justify flex '>
              <Lottie  animationData={animation}></Lottie></div> : '  '
          }
      </div>
    </>









  )
}


export default AddCart;