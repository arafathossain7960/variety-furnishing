import React from 'react';
import { useNavigate } from 'react-router-dom';

const RepoertModal = ({ product, user, setModalData}) => {
         const navigate = useNavigate();
    const handleBookingModal=(e)=>{
        e.preventDefault();
        const form = e.target;
        const report = form.report.value;
        const userName = user?.displayName;
        const userEmail = user?.email;
        const productName = product.name;
        const sellerEmail = product.sellerEmail;
        const sellerName = product.sellerName;
      
       
        const reportInfo = {
            userName,
            userEmail,
            productName,
            bookingProductId:product._id,
            report,
            sellerEmail,
            sellerName
        }

        fetch('http://localhost:5000/report',{
            method:'POST',
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify(reportInfo)
          })
          .then(res => res.json())
          .then( data =>{
            if(data.acknowledged){
              navigate("/");
              
            }
          })
      setModalData(null);
    }
    return (
        <div>
          
<input type="checkbox" id="reportModal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="reportModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
  
  
  
    <div>
        <h3 className='text-center text-primary text-2xl'>Write your Report/Sugetion to Admin</h3>
        <form onSubmit={handleBookingModal} action="">
            
            <textarea  className='input w-full mb-2' required name='report'  type="text"  placeholder='Enter your meeting location' />
            <input type="submit"  className='btn btn-secondary' />
           

        </form>

   
    </div>
 
 
  </div>
</div>
        </div>
    );
};

export default RepoertModal;