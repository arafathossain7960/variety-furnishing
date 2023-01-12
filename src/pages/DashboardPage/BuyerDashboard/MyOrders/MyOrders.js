import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../context/AuthProvider';

const MyOrders = () => {
    const {user, payment, setBooking}=useContext(AuthContext);
    const {data: myOrders, isLoading, refetch}=useQuery({
        queryKey:['myOrders'],
        queryFn:()=>fetch(`https://variety-furnishing-server-site.vercel.app/bookingInfo?email=${user?.email}`,{
            headers:{
                authorization:`bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
        
    })
    // if(myOrders.length=== 0){

    // }
   
    return (
     <div>
        <div className='text-center my-10 text-2xl text-primary'><h3> 
            All orders collections</h3></div>
        
        {
            myOrders?.map(myOrder =><div key={myOrder._id} className="card w-1/2 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={myOrder.image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{myOrder.productName}</h2>
              <p>{myOrder.productPrice}</p>
            <div   className="card-actions">
             {myOrder.payment===true?
               <span className='bold rounded p-2 text-xl bg-success'>Paid</span>:
            <Link to={`/dashboard/payment/${myOrder._id}`}>  <button className="btn btn-primary">pay now</button></Link>



             }
                <button className="btn btn-outline">Cancel</button>
              </div>
            </div>
           
          </div>)
        }
      
     </div>
    );
};

export default MyOrders;