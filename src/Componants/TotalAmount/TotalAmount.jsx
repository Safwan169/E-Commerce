import React, { useContext, useEffect, useState } from 'react';
import Test from '../Test';
import { context } from '../Authentication';
import axios from 'axios';

const TotalAmount = () => {
    const { TotalCartItem } = useContext(context)
    const [data] = Test()
    const [totalAmount, setTotalAmount] = useState()
    console.log(totalAmount * 100)

    useEffect(() => {
        if (data) {
            const totalAmount = data?.reduce((acc, currentValue) => {


                return (Math.ceil(acc + currentValue?.quantity * currentValue?.price))

            }, 0)
            return setTotalAmount(totalAmount)
        }

    }, [data])

    const handleSubmit=()=>{

        const TotalAmount=data?.length * 65 + totalAmount * 100

        axios.post('http://localhost:5000/checkOut',{TotalAmount})
        .then((response)=>{ 
            console.log(response)
            
            if (response?.data?.url) {
                window.location.href = response.data.url; // Redirect to SSLCommerz payment page
            }        
        })



    }
    return (
        <>
            <div className='bg-white md:mt-5 mt-5 lg:mt-0 p-6 space-y-5'>
                <span className='font-mono underline underline-offset-4'>Order Summary</span>
                <p className='w-full flex justify-between'>
                    <span>Subtotal ({TotalCartItem} items)</span>
                    <span>৳ {totalAmount * 100}</span>

                </p>
                <p className='w-full flex justify-between'>
                    <span>Shipping Fee</span>
                    <span>৳ {data?.length * 65}</span>

                </p>


                {/* for coupon */}
                <form  className="flex items-center w-full mx-auto">
                    <label for="simple-search" className="sr-only">Search</label>
                    <div className="relative w-full">

                        <input type="text" id="simple-search" className="text-left bg-gray-50 border border-gray-300 border-solid text-gray-900 text-sm rounded-md focus:ring-cyan-500 focus:border-cyan-500 focus:border-solid block w-full ps-5 p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Coupon" required />
                    </div>
                    <button type="submit" className="px-6 ml-2 w-fit text-sm font-medium text-white bg-cyan-500 rounded-sm border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">

                        Apply
                    </button>
                </form>


                <p className='w-full flex justify-between'>
                    <span className='font-medium font-serif'>Total</span>
                    <span className='text-orange-500'>৳ {data?.length * 65 + totalAmount * 100}</span>

                </p>

                <button onClick={handleSubmit} type="submit" className="px-6    w-full text-sm font-medium text-white bg-orange-500 rounded-sm  hover:bg-orange-600  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">

                    PROCEED TO CHECKOUT ({TotalCartItem})
                    
                </button>

            </div>
        </>
    );
};

export default TotalAmount;