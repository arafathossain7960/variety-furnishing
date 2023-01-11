import React from 'react';
import { Link } from 'react-router-dom';
import './Category.css';
const Category = () => {
    const handleCategoryRoute=category=>{
        <Link to={`/${category}`}></Link>

    }

    return (
        <div id='category'>
            <h1 className='mb-4 text-3xl text-light text-center bold' >Categories</h1>
            <p className='text-gl mb-10 text-center'>Explore with our products categories</p>
            
            <div className='grid text-center lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1  gap-6 mx-4'>

              
               <Link to='/category/bedroom'><button className='btn w-4/5 btn-outline' >Bedroom furniture</button></Link> 

               <Link to='/category/drawingRoom'><button className='btn w-4/5 btn-outline' >Drawing Room furniture</button></Link> 

               <Link to='/category/kitchen'><button className='btn w-4/5 btn-outline' >Kitchen Room furniture</button></Link> 

                 <Link to='/category/officeRoom'><button className='btn w-4/5 btn-outline' >Office Room furniture</button></Link> 
           
            </div>
        </div>
    );
};

export default Category;