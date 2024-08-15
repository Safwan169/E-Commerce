import React from 'react';
import Navbar from '../Componants/Navbar';
import { Outlet } from 'react-router-dom';

const Main_Layout = () => {
    return (
        <>
        <Navbar></Navbar>
        <Outlet></Outlet>
            
        </>
    );
};

export default Main_Layout;