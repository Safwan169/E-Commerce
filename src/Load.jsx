import React, { useContext } from 'react';
import { context } from './Componants/Authentication';

const Load = ({children}) => {
    const {load}=useContext(context)
    console.log(load)
    if(!load){
        return <span className="loading loading-dots loading-lg"></span>

    }
    return children
}

export default Load;