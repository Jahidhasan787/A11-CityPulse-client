import React from 'react';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <section className='w-11/12 min-h-[500px] mx-auto'>
                <Outlet></Outlet>
            </section>
            <Footer></Footer>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Root;