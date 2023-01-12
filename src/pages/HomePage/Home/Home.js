import React, { useContext } from 'react';
import Loading from '../../../componets/Loading/Loading';
import { AuthContext } from '../../../context/AuthProvider';
import Advertise from '../Advertise/Advertise';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';


const Home = () => {
    const {advertise, loading}=useContext(AuthContext);
    if(loading){
        return <Loading></Loading>
    }
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