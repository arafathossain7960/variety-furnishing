import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../context/AuthProvider';

const MyOrders = () => {
    const {user, payment, setBooking}=useContext(AuthContext);
    const {data: myOrders, isLoading, refetch}=useQuery({
        queryKey:['myOrders'],
        queryFn:()=>fetch(`http://localhost:5000/bookingInfo?email=${user?.email}`).then(res => res.json())
        
    })
   
    return (
     <div>
        
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