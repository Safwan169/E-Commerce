import React from 'react';
import Test from '../LOGIN_&_SignUp/test';
import { useState } from 'react'
import CartStyle from './CartStyle';


const AddCart = () => {

    const [data] = Test()
    console.log(data)

    const datas=[data]

    const [quantity, setQuantity] = useState(1);
    const itemPrice = 91;
    const shippingFee = 0;
    const discountPrice = 400;

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }
    return (
        <div className='lg:flex flex-col lg:p-10 p-0 md:p-4'>
         <div className='space-y-5'>
            {data?.map((d)=><CartStyle data={d}></CartStyle>)}
         </div>
        </div>









    )
}


export default AddCart;