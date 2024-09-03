import Lottie from 'lottie-react';
import React from 'react';
import animation from '../../../public/Animation - 1725348596165.json'

const Loading = () => {
    return (
        <div className=' '>
            <Lottie className='mt-10 ' animationData={animation}></Lottie>
        </div>
    );
};

export default Loading;