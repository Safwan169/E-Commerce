import React from 'react';
import Navbar from '../Componants/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Componants/Footer';
import LiveChat from '../Componants/LiveChat';
import AdminChat from '../Componants/Admin';

const Main_Layout = () => {

    const location=useLocation()
    return (

        <>
       { location?.pathname!=='/login'&& <Navbar></Navbar>}

       <div className='bg-gray-100 h-full pb-10 '>
       <Outlet ></Outlet>

       </div>
       <LiveChat></LiveChat>
       <AdminChat></AdminChat>
        { location?.pathname!=='/login'&& <Footer></Footer>}
            
        </>
    );
};

export default Main_Layout;