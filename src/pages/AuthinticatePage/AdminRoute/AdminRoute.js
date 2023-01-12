// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import Loading from '../../../componets/Loading/Loading';
// import { AuthContext } from '../../../context/AuthProvider';
// import { useAminRoute } from '../../../hooks/myhooks';
// import useAdmin from '../../../hooks/useAdmin';

// const AdminRoute = ({children}) => {
  
//     const {user, loading}=useContext(AuthContext);
//     const [isAdmin]=useAdmin(user.email);

// //    const [isAdmin]= useAminRoute(user?.email)
//     if(loading){
//         <Loading></Loading>
//     }
//    if(user && isAdmin){
//     return children
//    }else{
//     return <div className='my-12 text-center text-2xl text-primary'><h2>You are not admin please <Link to='/'>Go home</Link></h2></div>
//    }
// };

// export default AdminRoute;
