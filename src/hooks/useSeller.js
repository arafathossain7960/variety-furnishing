// import { useEffect, useState } from "react";

// const useSeller =(email)=>{
//     const [isSeller, setIsSeller]=useState(null);
//     useEffect(()=>{
//         if(email){
//             fetch(`https://variety-furnishing-server-site.vercel.app/user/seller/${email}`)
//             .then(res => res.json())
//             .then(data =>{
//                 if(data){
//                     setIsSeller(data.isSeller)
    
//                 }
//             })
//         }
      
//     },[email])

    // return [isSeller];
// }

// export default useSeller;