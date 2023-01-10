import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navigation from '../pages/SharedPage/Navigation/Navigation';

const DashboardLayout = () => {
    return (
      <div>
        <Navigation></Navigation>
     <div className="drawer drawer-mobile">
  <input id="dashboard-menu" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content ">
    <Outlet></Outlet>
  
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboard-menu" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
    
      <Link to="/dashboard/addproduct">Add product</Link>
      <Link to="/dashboard/allSellers">All sellers</Link>
      <Link to="/dashboard/allBuyers">All Buyers</Link>
      <Link to="/dashboard/allReports">All Reports</Link>

    </ul>
  
  </div>
</div>
</div>
    );
};

export default DashboardLayout;