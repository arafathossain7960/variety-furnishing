// for jwt access token------
export const accessToken =(email)=>{
  fetch(`http://localhost:5000/jwt?email=${email}`,{
   
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

