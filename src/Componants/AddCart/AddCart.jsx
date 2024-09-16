import React, { useContext } from 'react';
import { useState } from 'react'
import CartStyle from './CartStyle';
import Test from '../Test';
import Loading from '../Loading/Loading';
import Lottie from 'lottie-react';

import animation from './../../../public/cartLoader.json'
import { context } from '../Authentication';


const AddCart = () => {

  const [data, , , isFetching] = Test()


  const {cartLength}=useContext(context)


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
    <div className=''>


      <div className='lg:flex text-black flex-col lg:p-10 p-0 md:p-4'>


        <div className='space-y-5'>
          {data?.map((d) => <CartStyle data1={d}></CartStyle>)}
        </div>


          {
            cartLength ? <div className='  bg-opacity-25 fixed top-0 bg-slate-900  font-white left-1/2 -translate-x-1/2   h-svh w-full    mx-auto items-center justify-center  text-justify flex '><Lottie  animationData={animation}></Lottie></div> : '  '
          }
      </div>
    </div>









  )
}


export default AddCart;