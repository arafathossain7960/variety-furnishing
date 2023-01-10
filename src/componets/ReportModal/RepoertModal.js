import React from 'react';

const RepoertModal = ({ product, user, setModalData}) => {

    const handleBookingModal=(e)=>{
        e.preventDefault();
        const form = e.target;
        const report = form.report.value;
        const userName = user?.displayName;
        const userEmail = user?.email;
        const productName = product.name;
      
       
        const reportInfo = {
            userName,
            userEmail,
            productName,
            bookingProductId:product._id,
            report,
        }
console.log(reportInfo)

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