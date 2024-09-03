import React, { useContext } from 'react';
import { context } from './Authentication';

const Load = ({children}) => {
    const {load}=useContext(context)
    if(!load){
        return <div className='flex justify-center h-40 items-center'>
             <span className="loading  loading-dots loading-lg"></span>
        </div>

    }
    return children
}

export default Load;