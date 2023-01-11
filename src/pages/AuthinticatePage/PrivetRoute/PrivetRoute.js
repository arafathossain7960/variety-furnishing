import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const PrivetRoute = ({children}) => {
    const {user}=useContext(AuthContext);
  const location = useLocation();
    if(user){
        return children
    }else{
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
};

export default PrivetRoute;
