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
        <div>
             <div className='text-center my-10 text-2xl text-primary'><h3>All reports collections</h3></div>
            {
                reports?.map((report, i) => <div key={report._id} className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                <button className="btn btn-secondary btn-end btn-sm">{i+1}</button>
                  <h2 className="card-title">Report</h2>
                  <h2 className="card-title">{report.productName}</h2>
                  <p>{report.report}</p>
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