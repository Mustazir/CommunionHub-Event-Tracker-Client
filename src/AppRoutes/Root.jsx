import React from 'react';
import NavBar from '../Components/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';

const Root = () => {
    return (
        <div className='font-lato'>
            <NavBar></NavBar>
            <div className='pt-10 md:pt-20'>
            <Outlet></Outlet>
            
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;