import React from 'react';
import Navbar from '../Componants/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Componants/Footer';

const Main_Layout = () => {
    return (
        <>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
            
        </>
    );
};

export default Main_Layout;