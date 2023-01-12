import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const AllBuyers = () => {
    const [buyers, setBuyers]=useState([]);
    const [makeAdmin, setMakeAdmin]=useState('');
    useEffect(()=>{
        fetch('https://variety-furnishing-server-site.vercel.app/buyers')
        .then(res => res.json())
        .then(data => setBuyers(data))
    },[]);

    const handleByersDelete =(id)=>{
  
        fetch(`https://variety-furnishing-server-site.vercel.app/user/${id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            if(data){
                toast.success("user delete",{
                    position:'top-center',
                    theme: "colored",
                   })
            }
        })
        
    


}
    const handleMakeAdmin =(id)=>{
  
        fetch(`https://variety-furnishing-server-site.vercel.app/user/admin/${id}`,{
            method:'PUT'
        })
        .then(res => res.json())
        .then(data =>{
            if(data){
                toast.success("User admin",{
                    position:'top-center',
                    theme: "colored",
                   })
            }
        })
        
    


}
    return (
        <div className='my-16 mx-10'>
            <div className='text-center my-10 text-2xl text-primary'><h3>Buyers and Admin collections</h3></div>
        <div className="overflow-x-auto">
        <table className="table table-compact text-lg text-accent w-full">
            <thead>
            <tr className='text-primary text-xl'>
              
                <th>id</th> 
                <th>Name</th> 
                <th>Email</th> 
                <th>Admin</th> 
                <th>delete</th> 
                
            </tr>
            </thead> 
            <tbody>
                {
                    buyers.map((buyer, i) =><tr key={buyer._id}>
                        <th>{i+1}</th> 
                        <td>{buyer.name}</td> 
                        <td>{buyer.email}</td>
                        <td>
                            {
                                buyer.role==='admin'? <p>Admin</p>:
                                <button
                            onClick={()=>handleMakeAdmin(buyer._id)}
                            className='btn btn-sm'>
                            Make admin
                            </button>
                            }
                            </td>  
                        <td>
                            <button
                            onClick={()=>handleByersDelete(buyer._id)}
                            className='btn btn-sm'>
                                Delete
                            </button>
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

export default AllBuyers;