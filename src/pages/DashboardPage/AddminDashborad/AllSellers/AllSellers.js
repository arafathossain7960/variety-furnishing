import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../../../../context/AuthProvider';

const AllSellers = () => {
    const {user}=useContext(AuthContext);

    const [sellers, setSellers]=useState([]);
    const [sellerVerify, setSellerVerify]=useState({});
    useEffect(()=>{
        fetch('http://localhost:5000/sellers')
        .then(res => res.json())
        .then(data => setSellers(data))
    },[user.email]);

    // delete function
  const handleSellerDelete =(id)=>{
  
            fetch(`http://localhost:5000/user/${id}`,{
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.acknowledged){
                   
                    toast.success("user delete",{
                        position:'top-center',
                        theme: "colored",
                       })
                }
            })
            
        
   
    
  }
  const handleSellerVerified =(email)=>{
  
            fetch(`http://localhost:5000/user/verify/${email}`,{
                method:'PUT'
            })
            .then(res => res.json())
            .then(data => {
                if(data.acknowledged){
                    setSellerVerify(data.acknowledged)
                    toast.success("seller verification success",{
                        position:'top-center',
                        theme: "colored",
                       })
                }
            })
            
        
   
    
  }

 




  
    return (
        <div className='my-16 mx-10'>
             <div className='text-center my-10 text-2xl text-primary'><h3>Sellers collections</h3></div>
            <div className="overflow-x-auto">
            <table className="table  w-full">
                <thead>
                <tr>
                    <th>ID</th> 
                    <th>Name</th> 
                    <th>Email</th> 
                    <th>Delete</th> 
                    <th>verify</th> 
                    
                </tr>
                </thead> 
                <tbody>
                    {
                        sellers.map((seller, i) =><tr key={seller._id}>
                            <th>{i+1}</th> 
                            <td>{seller.name}</td> 
                            <td>{seller.email}</td>
                            <td>
                                {
                                    sellerVerify ?<p className='text-success'>verified</p>
                                   :<button 
                                    onClick={()=> handleSellerVerified(seller.email)}
                                    className='btn btn-small'
                                    >Verify</button>
                                    
                                }
                              
                            </td> 

                            <td><button
                            onClick={()=>handleSellerDelete(seller._id)}
                            className='btn btn-small'
                            >Delete</button>
                            </td> 
                           
                            
                           
                        </tr>)
                    }
                

                </tbody> 
            
            </table>
            </div>
            <ToastContainer
        position='top-center'
        ></ToastContainer>
        </div>
    );
};

export default AllSellers;