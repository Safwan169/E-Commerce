import Lottie from 'lottie-react';
import React from 'react';
import animation from '../../../public/loading.json'

const Loading = () => {
    return (
        <div className=' '>
            <Lottie className='w-1/3 h-1/2 mx-auto   ' animationData={animation}></Lottie>
        </div>
    );
};

export default Loading;