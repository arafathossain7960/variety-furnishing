import React from 'react';

const ProductDetails = ({product, setModalData}) => {
    return (
        <div>
            <div className="card lg:card-side h-96 my-8 bg-base-100  shadow-xl">
                <figure><img className='w-9/12 ' src={product.image} alt="Album"/></figure>
                <div className="card-body">
                  <h3>{product.name}</h3>
                  <p>{product.productCategory}</p>
                  <p><span><b>Original Price $</b>{product.originalPrice} </span> <span><b>Resale Price $</b>{product.resalePrice} </span></p>
                  <p><span><b>Years of used :</b>{product.yearsOfUsed} </span> <span><b>Posted time : </b>{product.postedDate} </span></p>
                  <p><b>Description: </b> {product.description}</p>
                  <p>Meeting location {product.location}</p>
                  <p>seller {product.sellerName}</p>
                  
                  

                  {
                   product.sellerVerified===true &&
                    <p>   <input type="checkbox" checked className="checkbox checkbox-success mr-6" /> 
                  seller verified
                  </p>
                  }
                  <div className="card-actions justify-center">
                  <label onClick={()=>setModalData(product)} htmlFor="bookingModal" className="btn btn-primary">Book Now</label>

                  </div>
                  <div className="card-actions justify-center">
                  <label onClick={()=>setModalData(product)} htmlFor="reportModal" className="btn btn-primary">Report to admin</label>

                  </div>
                </div>
              
             
              </div>
        </div>
    );
};

export default ProductDetails;
