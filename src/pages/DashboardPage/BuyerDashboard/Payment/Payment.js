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
            <h1>total price :</h1>
            <h1>Hello i am the payment</h1>
            <button className='btn btn-secondary' onClick={()=>handlePayment(id.id)} >paid</button>
            
        <ToastContainer
        position='top-center'
        ></ToastContainer>
        </div>
    );
};

export default Payment;