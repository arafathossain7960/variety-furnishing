import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/SharedPage/Footer/Footer';
import Navigation from '../pages/SharedPage/Navigation/Navigation';

const MainLayout = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;