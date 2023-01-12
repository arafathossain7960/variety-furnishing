import React from 'react';

const Advertise = ({advertise}) => {
  
    return (
      <div>
      <div className="card lg:card-side h-96 my-8 bg-base-100  shadow-xl">
          <figure><img className='w-9/12 ' src={advertise.image} alt="Album"/></figure>
          <div className="card-body">
            <h3>{advertise.name}</h3>
            <p>{advertise.productCategory}</p>
            <p><span><b>Original Price $</b>{advertise.originalPrice} </span> <span><b>Resale Price $</b>{advertise.resalePrice} </span></p>
            <p><span><b>Years of used :</b>{advertise.yearsOfUsed} </span> <span><b>Posted time : </b>{advertise.postedDate} </span></p>
            <p><b>Description: </b> {advertise.description}</p>
            <p>Meeting location {advertise.location}</p>
            <p>seller {advertise.sellerName}</p>
            
            

            {
             advertise.sellerVerified===true &&
              <p>   <input type="checkbox" checked className="checkbox checkbox-success mr-6" /> 
            seller verified
            </p>
            }
            {/* <div className="card-actions justify-center">
            <label onClick={()=>setModalData(product)} htmlFor="bookingModal" className="btn btn-primary">Book Now</label>

            </div>
            <div className="card-actions justify-center">
            <label onClick={()=>setModalData(product)} htmlFor="reportModal" className="btn btn-primary">Report to admin</label>

            </div> */}
          </div>
        
       
        </div>
  </div>
    );
};

export default Advertise;
