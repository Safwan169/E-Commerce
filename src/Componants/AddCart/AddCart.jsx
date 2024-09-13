import React from 'react';
import Test from '../LOGIN_&_SignUp/test';

const AddCart = () => {

    const [data] = Test()
    console.log(data)

    return (
        <div className='text-4xl mt-1/2 h-svh flex justify-center items-center text-gray-400 font-semibold'>
        ON WORKING...{data?.length}
    </div>
    );
};

export default AddCart;