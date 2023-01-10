import React, { useEffect, useState } from 'react';

const AllBuyers = () => {
    const [buyers, setBuyers]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/buyers')
        .then(res => res.json())
        .then(data => setBuyers(data))
    },[])
    return (
        <div className='my-16 mx-10'>
        <div className="overflow-x-auto">
        <table className="table table-compact w-full">
            <thead>
            <tr>
                <th></th> 
                <th>Name</th> 
                <th>Job</th> 
                <th>company</th> 
                <th>location</th> 
                <th>Last Login</th> 
                <th>Favorite Color</th>
            </tr>
            </thead> 
            <tbody>
                {
                    buyers.map((buyer, i) =><tr key={buyer._id}>
                        <th>{i+1}</th> 
                        <td>{buyer.name}</td> 
                        <td>{buyer.email}</td> 
                        <td></td> 
                        <td>Canada</td> 
                        <td>12/16/2020</td> 
                        <td>Blue</td>
                    </tr>)
                }
            

            </tbody> 
        
        </table>
        </div>
    </div>
    );
};

export default AllBuyers;