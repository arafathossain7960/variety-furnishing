import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import Advertise from '../Advertise/Advertise';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';


const Home = () => {
    const {advertise}=useContext(AuthContext);
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            {
                advertise &&
                <Advertise
            advertise={advertise}
            ></Advertise>
            }
            
        </div>
    );
};

export default Home;