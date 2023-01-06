import React from 'react';
import './Category.css';
const Category = () => {

    return (
        <div id='category'>
            <h1 className='my-6 text-2xl text-neutral text-center bold' >Categories</h1>
            
            <div className='grid grid-cols-4 gap-4 mx-4'>
                <button className='btn btn-outline' >Amelian Sofa</button>
                <button className='btn btn-outline' >Amelian Sofa</button>
                <button className='btn btn-outline' >Amelian Sofa</button>
                <button className='btn btn-outline' >Amelian Sofa</button>
            </div>
        </div>
    );
};

export default Category;