import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Layout = ({ children, user }) => {
    const location = useLocation();
    const noNavbarRoutes = ['/login', '/register'];

    const shouldShowNavbar = !noNavbarRoutes.includes(location.pathname) && user;

    return (
        <div>
            {shouldShowNavbar && <Navbar />}
            {children}
        </div>
    );
};

export default Layout;