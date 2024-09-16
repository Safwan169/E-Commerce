import React from 'react';
import { useState } from 'react'
import CartStyle from './CartStyle';
import Test from '../Test';
import Loading from '../Loading/Loading';


const AddCart = () => {

  const [data, , , isFetching] = Test()


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
    <div className='border border-red-500'>


      <div className='lg:flex text-black flex-col lg:p-10 p-0 md:p-4'>


        <div className='space-y-5'>
          {data?.map((d) => <CartStyle data1={d}></CartStyle>)}
        </div>


          {
            isFetching ? <div className=' absolute  left-1/2 -translate-x-1/2  top-1/2   mx-auto items-center justify-center  text-justify flex '>loading....</div> : '  '
          }
      </div>
    </div>









  )
}


export default AddCart;