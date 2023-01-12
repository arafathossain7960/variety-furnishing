import { useState } from "react";

// for jwt access token------
export const accessToken =(email)=>{
  fetch(`https://variety-furnishing-server-site.vercel.app/jwt?email=${email}`,{
   
  })
  .then(res => res.json())
  .then(data =>{
    if(data.accessToken){
        localStorage.setItem('accessToken', data.accessToken);
    }
  })
}

// for image hosting to imgbb 
export const getImageLink =(image)=>{
  let imageLink;
  const formData = new FormData();
  formData.append('image', image);
  const imagebbApiKey=process.env.REACT_APP_amgbb_api_key;
  const url =`https://api.imgbb.com/1/upload?key=${imagebbApiKey}`;
  fetch(url, {
    method:'POST',
    body:formData
  })
  .then(res => res.json())
  .then(imgData => {
    
      console.log(imgData.data.url);

   
   
  })

 
return imageLink;
}

// export const useAminRoute =(email)=>{
//   const [isdAmin, setIsAdmin]=useState('');
 
//   if(email){
//     fetch(`https://variety-furnishing-server-site.vercel.app/user/admin/${email}`)
//     .then(res => res.json())
//     .then(data =>{
//         if(data){
//             setIsAdmin(data.isAdmin)

//         }
//     })
//   }

//   return [isdAmin];
// }

