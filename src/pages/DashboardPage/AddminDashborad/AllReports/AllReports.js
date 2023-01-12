import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AllReports = () => {
    const [reports, setReport]=useState([]);

    useEffect(()=>{
     axios.get('http://localhost:5000/report')
     .then(res => setReport(res.data))
    },[])

    console.log(reports)
    return (
        <div className=''>
             <div className='text-center my-10 text-2xl text-primary'><h3>All reports collections</h3></div>
            {
                reports?.map((report, i) => <div key={report._id} className="card w-96 my-4 text-center text-accent bg-base-100 shadow-xl">
                <div className="card-body">
                <button className="btn btn-secondary btn-end btn-sm">{i+1}</button>
        
                  <h2 className="card-title">product name : {report.productName}</h2>
                  <small>seller : {report.sellerName}</small>  <small> Email: : {report.sellerEmail}</small>
                  <p className='bg-gray-100 my-2 py-4'><b>Comment:</b> {report.report}</p>
                  <small>User: {report.userName} </small> <small>Email: {report.userEmail} </small>
                  <div className="card-actions justify-end">
                    {/* <button className="btn btn-primary">Delete</button> */}
                  </div>
                </div>
              </div>)
            }

        </div>
    );
};

export default AllReports;