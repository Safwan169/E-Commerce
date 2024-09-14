import React, { useContext } from 'react';
import { context } from '../Authentication';
import Lottie from 'lottie-react';
import animation from '../../../public/loading.json'

const UserLoading = ({ children }) => {
    const { loading } = useContext(context)

    if (!loading) {

        return (

            <div className=' '>
                <Lottie className='w-1/3 h-1/2 mx-auto   ' animationData={animation}></Lottie>
            </div>
        )

    }
    return children





};

export default UserLoading;