// import {  useEffect, useState } from "react"


// const useAdmin = (email)=>{
//     const [isdAmin, setIsAdmin]=useState('');
  
//     useEffect(()=>{
//         if(email){
//             fetch(`http://localhost:5000/user/admin/${email}`)
//             .then(res => res.json())
//             .then(data =>{
//                 if(data){
//                     setIsAdmin(data.isAdmin)
    
//                 }
//             })
//         }
      
//     },[email])

//     return [isdAmin];
// }

// export default useAdmin;