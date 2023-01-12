import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import Loading from '../../../../componets/Loading/Loading';
import { AuthContext } from '../../../../context/AuthProvider';

const MyProducts = () => {
    
    const {user, loading, setAdvertise}=useContext(AuthContext);
  
    const {data:myProducts}=useQuery({
        queryKey:['myProducts', user?.email],
        queryFn:()=>fetch(`http://localhost:5000/myProducts?sellerEmail=${user?.email}`).then(res => res.json())
    })

    if(loading){
        return <Loading></Loading>
      }
// handle advertisement 
    const handleAdvertisement =(id)=>{
        fetch(`http://localhost:5000/products/advertise/${id}`)
        .then(res => res.json())
        .then(data => setAdvertise(data));
    }

    // handle my product delete
    const handleProductDelete =id=>{
        fetch(`http://localhost:5000/myProducts/delete/${id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            if(data.acknowledged){
                toast.success("Product delete success",{
                    position:'top-center',
                    theme: "colored",
                   })
            }

        })
    }
   
    return (
        <div className='my-16 mx-10'>
             <div className='text-center my-10 text-2xl text-primary'><h3>Products  collections</h3></div>
        <div className="overflow-x-auto">
        <table className="table table-compact text-accent w-full">
            <thead>
            <tr className='text-primary text-xl'>
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
                            <button
                            onClick={()=> handleAdvertisement(myProduct._id)}
                            className='btn btn-sm btn-secondary'>Advertise</button>
                        </td>
                        <td><button
                        onClick={()=> handleProductDelete(myProduct._id)}
                        className='btn btn-sm btn-warning'
                        >Delete</button></td> 
                        
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

export default MyProducts;