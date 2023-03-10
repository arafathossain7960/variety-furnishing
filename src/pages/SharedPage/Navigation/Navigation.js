import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const Navigation = () => {
    const {user, loginOut}=useContext(AuthContext);
    
    // login out 
    const userLoginOut = ()=>{
        loginOut()
        .then(result =>{
            console.log(result)
        })
        .then(error =>{
            console.log(error);
        })
    }
    const nabItem = [
        <Link to='/'>Home</Link>,
        <Link to='/blogs'>Blog</Link>,
        <Link to='/dashboard'>Dashboard</Link>,
        <>
        {
            user?.uid && user?.email? <>
            <button onClick={userLoginOut}>Login out</button>
        
        <p>{user?.displayName}</p>
            </>:
             <Link to='/login'>Login</Link>

        }
        </>
    ]
    return (
        <div className="navbar bg-info">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {
            nabItem.map((item, i )=> <li key={i}>
                {item}
            </li>)
        }
            </ul>
            
          </div>

          <Link to='/' className="btn btn-ghost normal-case text-xl"> Variety  <span className='text-primary ml-2'>  Furnishing</span></Link>
          <label tabIndex={0} htmlFor="dashboard-menu" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
      
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          
        {
            nabItem.map((item, i )=> <li key={i}>
                {item}
            </li>)
        }
        
          </ul>
        
        </div>
       
       
      
      </div>
    );
};

export default Navigation;