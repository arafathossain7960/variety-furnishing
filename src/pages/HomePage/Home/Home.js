import React from 'react';
import Advertise from '../Advertise/Advertise';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import HomeNewProducts from '../HomeNewProducts/HomeNewProducts';
import HomeProducts from '../HomeProducts/HomeProducts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <HomeProducts></HomeProducts>
            <HomeNewProducts></HomeNewProducts>
        </div>
    );
};

export default Home;