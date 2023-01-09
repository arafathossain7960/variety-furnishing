import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductsCategory = () => {
    const products = useLoaderData();
  
    return (
        <div className='px-6 py-12 '>
            {
                products.map(product =><div className="card lg:card-side my-8 bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/400/400/arch" alt="Album"/></figure>
                <div className="card-body">
                  <h2 className="card-title">New album is released!</h2>
                  <p>Click the button to listen on Spotiwhy app.</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                  </div>
                </div>
              </div>)
            }
            
        </div>
    );
};

export default ProductsCategory;
