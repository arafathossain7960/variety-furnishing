import { useEffect, useState } from "react";

const useSeller =(email)=>{
    const [isSeller, setIsSeller]=useState('');
    useEffect(()=>{
        if(email){
            fetch(`http://localhost:5000/user/seller/${email}`)
            .then(res => res.json())
            .then(data =>{
                if(data){
                    setIsSeller(data.isSeller)
    
                }
            })
        }
      
    },[email])

    return [isSeller];
}

export default useSeller;