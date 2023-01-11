import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import useAdmin from '../../../hooks/useAdmin';

const AdminRoute = ({children}) => {
    const {user}=useContext(AuthContext);
    const [isAdmin]=useAdmin(user.email);
   if(user && isAdmin){
    return children
   }else{
    return <div className='my-12 text-center text-2xl text-primary'><h2>You are not admin please <Link to='/'>Go home</Link></h2></div>
   }
};

export default AdminRoute;
