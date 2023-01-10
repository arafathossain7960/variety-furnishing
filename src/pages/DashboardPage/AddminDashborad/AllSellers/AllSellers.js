import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';

const AllSellers = () => {
    // const {data:sellers}=useQuery({
    //     queryKey:['sellers'],
    //     queryFn:()=>{
    //         fetch('http://localhost:5000/sellers')
    //         .then(res => res.json());
            
    //     }
    // })

    const [sellers, setSellers]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/sellers')
        .then(res => res.json())
        .then(data => setSellers(data))
    },[])

  
    return (
        <div className='my-16 mx-10'>
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
                            <td><button
                            className='btn btn-small'
                            >Delete</button></td> 
                            <td><button 
                            className='btn btn-small'
                            >Verify</button></td> 
                            
                           
                        </tr>)
                    }
                

                </tbody> 
            
            </table>
            </div>
        </div>
    );
};

export default AllSellers;