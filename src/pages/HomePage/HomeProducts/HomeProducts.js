import React from 'react';
import Advertise from '../Advertise/Advertise';

const HomeProducts = () => {
    return (
        <div className='flex'>
            <div className='w-1/3 bg-info'>
                <h2>Here will add home products</h2>
            </div>
            <div className= 'bg-accent w-1/7'>
                <Advertise></Advertise>
            </div>
        </div>
    );
};

export default HomeProducts;