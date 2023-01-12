import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';


const Payment = () => {
 const id = useParams('id');
const navigate =useNavigate();

 const handlePayment =(id)=>{
    fetch(`http://localhost:5000/bookingInfo?id=${id}`,{
        method:'PUT'

    })
    .then(res => res.json())
    .then(data =>{
        if(data.acknowledged){
            toast.success("Product successfully added",{
                position:'top-center',
                theme: "colored",
               })
               navigate('/dashboard/myOrders')
        }
    })
 

 }

    return (
        <div>
           <div className="hero min-h-screen bg-accent text-dark">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Payment placement</h1>
      <p className="py-6"> Your credit cart information and password will protected, don't worry about the security.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
        
          <input type="text" name='number' required placeholder="Credit card number" className="input input-bordered" />
        </div>
        <div className="form-control">
          
          <input type="text" name='password' required placeholder="password" className="input input-bordered" />
        
        </div>
        <div className="form-control mt-6">
          <button onClick={()=>handlePayment(id.id)}  className="btn btn-primary">Pay Now</button>
        </div>
      </div>
    </div>
  </div>
</div>
            
            
        <ToastContainer
        position='top-center'
        ></ToastContainer>
        </div>
    );
};

export default Payment;