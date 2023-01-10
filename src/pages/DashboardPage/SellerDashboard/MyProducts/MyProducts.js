import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../context/AuthProvider';

const MyProducts = () => {
    const {user}=useContext(AuthContext);
  
    const {data:myProducts}=useQuery({
        queryKey:['myProducts', user?.email],
        queryFn:()=>fetch(`http://localhost:5000/myProducts?sellerEmail=${user?.email}`).then(res => res.json())
    })
   
    return (
        <div className='my-16 mx-10'>
        <div className="overflow-x-auto">
        <table className="table table-compact w-full">
            <thead>
            <tr>
                <th>ID</th> 
                <th>Name</th> 
                <th>Price</th> 
                <th>Status</th> 
                <th>Advertise</th> 
                <th>Delete</th> 
              
            </tr>
            </thead> 
            <tbody>
                {
                   myProducts?.map((myProduct, i) =><tr key={myProduct._id}>
                        <th>{i+1}</th> 
                        <td>{myProduct.name}</td> 
                        <td>{myProduct.resalePrice}</td> 
                        <td>Sold</td> 
                        <td>
                            <button className='btn btn-sm btn-secondary'>Advertise</button>
                        </td>
                        <td><button
                        className='btn btn-sm btn-warning'
                        >Delete</button></td> 
                        
                    </tr>)
                }
            

            </tbody> 
        
        </table>
        </div>
    </div>
    );
};

export default MyProducts;