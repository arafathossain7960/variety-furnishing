import React from 'react';
import { useNavigate } from 'react-router-dom';

const BookingModal = ({ product, user, setModalData}) => {
  const navigate =useNavigate();
    const handleBookingModal=(e)=>{
        e.preventDefault();
        const form = e.target;
        const userName = user?.displayName;
        const userEmail = user?.email;
        const productName = product.name;
        const productPrice = product.resalePrice;
        const phone = form.phone.value;
        const location = form.location.value;
       
        const bookingInfo = {
            userName,
            userEmail,
            productName,
            productPrice,
            phone,
            location,
            bookingProductId:product._id,
            image:product.image,
            payment:false,
          
        }
        fetch('https://variety-furnishing-server-site.vercel.app/bookingInfo',{
          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(bookingInfo)
        })
        .then(res => res.json())
        .then( data =>{
          if(data.acknowledged){
            navigate("/dashboard/myOrders");
            
          }
        })


      setModalData(null);
    }
    return (
 <div>
          
<input type="checkbox" id="bookingModal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="bookingModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
  
  
  
    <div>
        <h3 className='text-center text-primary text-2xl'>Booking info</h3>
        <form onSubmit={handleBookingModal} action="">
            <input className='input w-full mb-2' name='userName' type="text" readOnly value={`Name : ${user?.displayName}`} />
            <br />
            <input className='input w-full mb-2'  name='userEmail'  type="text" readOnly value={`email: ${user?.email}`} />
            <br />
            <input  className='input w-full mb-2'  name='productName'  type="text" readOnly value={`product name : ${product.name}`} />

            <input  className='input w-full mb-2'  name='price'  type="text" readOnly value={`product price: $ ${product.resalePrice}`} />

            <input  className='input w-full mb-2' required  name='phone'  type="text"  placeholder='Enter your phone number' />

            <input  className='input w-full mb-2' required name='location'  type="text"  placeholder='Enter your meeting location' />
            <input type="submit"  className='btn btn-primary' />
           

        </form>

   
    </div>
 
 
  </div>
</div>
        </div>
    );
};

export default BookingModal;