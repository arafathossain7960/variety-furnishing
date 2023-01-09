import React from 'react';
import { Link } from 'react-router-dom';
import './Category.css';
const Category = () => {
    const handleCategoryRoute=category=>{
        <Link to={`/${category}`}></Link>

    }

    return (
        <div id='category'>
            <h1 className='my-6 text-2xl text-neutral text-center bold' >Categories</h1>
            
            <div className='grid grid-cols-4 gap-4 mx-4'>

              
               <Link to='/category/bedroom'><button className='btn btn-outline' >Bedroom furniture</button></Link> 

               <Link to='/category/drawingRoom'><button className='btn btn-outline' >Drawing Room furniture</button></Link> 

               <Link to='/category/kitchen'><button className='btn btn-outline' >Kitchen Room furniture</button></Link> 

                 <Link to='/category/officeRoom'><button className='btn btn-outline' >Office Room furniture</button></Link> 
           
            </div>
        </div>
    );
};

export default Category;