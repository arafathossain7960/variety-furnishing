// import {  useEffect, useState } from "react"


// const useAdmin = (email)=>{
//     const [isdAmin, setIsAdmin]=useState('');
  
//     useEffect(()=>{
//         if(email){
//             fetch(`https://variety-furnishing-server-site.vercel.app/user/admin/${email}`)
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