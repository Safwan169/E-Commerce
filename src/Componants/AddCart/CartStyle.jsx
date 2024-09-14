import { Rating, ThinStar } from '@smastrom/react-rating';
import axios from 'axios';
import React, { useState } from 'react';
import Test from '../LOGIN_&_SignUp/test';

const CartStyle = ({ data }) => {

    const { image, title, description, brand, price ,id} = data

    const [, ,refetch]=Test()

    


    const des = description.split(' ')
    console.log(des)

    const desData = des.slice(0, 10).join(' ') + (' ......')
    const desDataSmall = description.slice(0, 40) + (' ......')
    // console.log(desData)

    const myStyles = {
        itemShapes: ThinStar,
        activeFillColor: '#ffb700',
        inactiveFillColor: '#fbf1a9'
    }


    const [quantity, setQuantity] = useState(data?.quantity)


    const handleIncrease = () => {


        if (15 !== quantity) {

            setQuantity(quantity + 1)

            axios.post('http://localhost:5000/cartInc',{id})
            .then(
                refetch()
            )


        }
    }

    const handleDecrease = () => {



        if (quantity !== 1)

            setQuantity(quantity - 1)

            axios.post('http://localhost:5000/cartDec',{id})
            .then(
                refetch()
            )


    }
    return (
        <div className="flex gap-2 p-2 bg-base-100 shadow-xl">
            {/* <figure className='border border-red-500 max-w-none'> */}
            <img className=' bg-blue-50 ml-2 border lg:hidden md:hidden  block w-1/5 h-1/5 bg-cover my-auto '
                src={image}
                srcSet={`${image} 0.1x`}
                alt="loading..." />
            {/* </figure> */}
            <figure className=' hidden lg:block md:block  max-w-none'>
                <img className='w-1/2 hidden lg:block md:block  my-auto'
                    src={image}
                    srcSet={`${image} 0.1x`}
                    alt="loading..." />
            </figure>
            <div className="lg:space-y-2 md:space-y-2 ">
                <h2 className=" text-[12px] loading-[2px] md:text-xl font-medium  lg:text-xl text-left">{title}</h2>
                <p className='text-xs lg:block md:block hidden '>{desData}</p>
                <p className='text-[10px] lg:hidden md:hidden block '>{desDataSmall}</p>
                <p className='md:text-xs lg:text-xs text-[10px] font-serif text-gray-400'>{brand || "No Brand"}</p>
                <p className='flex lg:flex-col md:flex-col  justify-between text-red-500 '>
                    <span  className='flex border border-red-500 text-left'>
                        <button onClick={handleDecrease} className={`w-fit   text-gray-400 text-2xl   rounded-sm px-4 ${quantity == 1 && 'cursor-not-allowed bg-gray-100 ' || 'bg-gray-200'} `}>-</button>
                        <span className='w-3 text-center'>{quantity}</span>
                        <button onClick={handleIncrease} className={` w-fit  text-gray-400 text-2xl ${quantity == 15 ? ' bg-gray-100 cursor-not-allowed' : 'bg-gray-200'}  rounded-sm px-3`}>+</button>
                    </span>
                    ৳ {price}</p>

            </div>
        </div>
    );
};

export default CartStyle;