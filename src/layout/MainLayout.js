import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import React from 'react';

const MainLayout = ({ children }) => {
    return (
        <>
            <Navbar></Navbar>
            <main className=' min-h-screen'>{children}</main>
            <Footer></Footer>
        </>
    );
};

export default MainLayout;