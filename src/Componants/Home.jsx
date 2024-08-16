import React, { useContext } from 'react';
import { context } from './Authentication';

const Home = () => {
    const{searchData}=useContext(context)
    console.log(searchData)
    return (
        <div>
            ssdfd
        </div>
    );
};

export default Home;