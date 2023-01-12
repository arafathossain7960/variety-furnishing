import { isAdmin } from '@firebase/util';
import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Loading from '../componets/Loading/Loading';
import { AuthContext } from '../context/AuthProvider';
import { useAminRoute } from '../hooks/myhooks';
import useAdmin from '../hooks/useAdmin';
import useSeller from '../hooks/useSeller';
import Navigation from '../pages/SharedPage/Navigation/Navigation';

const DashboardLayout = () => {
  const [isSeller, setIsSeller]=useState(null);
  const [isdAmin, setIsAdmin]=useState(false);
  const {user, loading}=useContext(AuthContext);
  if(loading){
    <Loading></Loading>
  }

  useEffect(()=>{
      if(user){
          fetch(`http://localhost:5000/user/seller/${user?.email}`)
          .then(res => res.json())
          .then(data =>{
              if(data){
                  setIsSeller(data.isSeller)
  
              }
          })
      }
    
  },[user?.email])
 
  
  
  useEffect(()=>{
      if(user?.email){
          fetch(`http://localhost:5000/user/admin/${user?.email}`)
          .then(res => res.json())
          .then(data =>{
              if(data){
                  setIsAdmin(data.isAdmin)
  
              }
          })
      }
    
  },[user?.email])



    return (
      <div>
        <Navigation></Navigation>
     <div className="drawer drawer-mobile">
  <input id="dashboard-menu" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content  ">
    <Outlet></Outlet>
  
  
  </div> 
  <div className="drawer-side text-center text-accent">
    <label htmlFor="dashboard-menu" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-72 bg-base-100 text-base-content">
  
   

    {
      isdAmin && 
      <>
     <Link className="py-2 px-4 my-2 bg-secondary rounded text-primary text-lg" to="/dashboard/addproduct">Add product</Link>
     <Link className="py-2 px-4 my-2 bg-secondary rounded text-primary text-lg" to="/dashboard/myProducts">My Products</Link>
     <Link className="py-2 px-4 my-2 bg-secondary rounded text-primary text-lg" to="/dashboard/myOrders">My Orders</Link>
     <Link className="py-2 px-4 my-2 bg-secondary rounded text-primary text-lg" to="/dashboard/allReports">All Reports</Link>
     <Link className="py-2 px-4 my-2 bg-secondary rounded text-primary text-lg" to="/dashboard/allSellers">All sellers</Link>
     <Link className="py-2 px-4 my-2 bg-secondary rounded text-primary text-lg" to="/dashboard/allBuyers">All Buyers</Link>
   </>
    }
    {
      isSeller===true && isdAmin===false ?
      <>
     <Link className="py-2 px-4 my-2 bg-secondary rounded text-primary text-lg" to="/dashboard/addproduct">Add product</Link>
     <Link className="py-2 px-4 my-2 bg-secondary rounded text-primary text-lg" to="/dashboard/myProducts">My Products</Link>
     <Link className="py-2 px-4 my-2 bg-secondary rounded text-primary text-lg" to="/dashboard/myOrders">My Orders</Link>
      </>
      :
     <Link className="py-2 px-4 my-2 bg-secondary rounded text-primary text-lg" to="/dashboard/myOrders">My Orders</Link>
    }
    
    
     

      
      
      
       <>
     
      {/*<Link className="py-2 px-4 my-2 bg-secondary rounded text-primary text-lg" to="/dashboard/myProducts">My Products</Link>
     <Link className="py-2 px-4 my-2 bg-secondary rounded text-primary text-lg" to="/dashboard/addproduct">Add product</Link>
     <Link className="py-2 px-4 my-2 bg-secondary rounded text-primary text-lg" to="/dashboard/myOrders">My Orders</Link> */}
      </>
      
   
        
       
      

    </ul>
  
  </div>
</div>
</div>
    );
};

export default DashboardLayout;