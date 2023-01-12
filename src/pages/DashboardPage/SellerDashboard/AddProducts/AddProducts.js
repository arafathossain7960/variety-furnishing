import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../../../../context/AuthProvider';


const AddProducts = () => {
    const {user}=useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const handleAddProduct=(data)=>{
        const formData = new FormData();
        const date = new Date().toDateString();
        const image = data.productPhoto[0];
        
        formData.append('image', image);
        const imagebbApiKey=process.env.REACT_APP_amgbb_api_key;
        const url =`https://api.imgbb.com/1/upload?key=${imagebbApiKey}`;
        fetch(url, {
            method:'POST',
            body:formData
        })
        .then(res => res.json())
        .then(imgData => {
            const productData ={
                
                name:data.productName,
                image:imgData.data.url,
                location:data.meetingLocation,
                productCategory:data.productCategory,
                yearsOfUsed:data.yearsOfUsed,
                originalPrice:data.originalPrice,
                resalePrice:data.resalePrice,
                description:data.description,
                sellerName:user?.displayName,
                sellerEmail:user?.email,
                postedDate:date,
                sellerVerified:false,

            } 
            saveProducts(productData)
  })
  // save products to mongodb function
  const saveProducts =(productsData)=>{
    fetch('https://variety-furnishing-server-site.vercel.app/addproduct', {
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(productsData)
    })
    .then(res => res.json())
    .then(data =>{
        if(data.acknowledged ){
            toast.success("Product successfully added",{
                position:'top-center',
                theme: "colored",
               })
            reset();
            
        }
       else{
        toast.error("Failed to add ",{
            position:'top-center',
            theme: "colored",
           })
       }
           
    })

  }
     
 }

    return (
        <div className='mx-auto w-9/12 my-10 text-black shadow border round p-10'>
        <h3 className='text-center text-2xl text-primary'>Add product</h3>

        <form onSubmit={handleSubmit(handleAddProduct)}>
        
        {/* ------------ Name -------------- */}
        <div className="form-control w-full max-w-xs">
        <label className="label">
        <span className="text-accent">Product name</span>
        </label>
        <input type="text"
        placeholder="Enter your product name" 
        name='productName'
        className="input input-bordered w-full max-w-xs" 
        {...register("productName", { required: true })}
        />
        {errors.productName && <span className='text-error'>Your product name required</span>}
        </div>
        {/* ------ category ----- */}
        <div className="form-control w-full max-w-xs">
     <label className="label">
    <span className="text-accent">Select Product category</span>
  </label>
  <select className='input text-accent' {...register("productCategory", { required: true })}>
        <option value="bedroom">Bedroom</option>
        <option  value="kitchen">Kitchen Room</option>
        <option  value="officeRoom">Office Room</option>
        <option  value="drawingRoom">Drawing Room</option>
      </select>

</div>

        {/* /--------- years of used  --------- */}
        <div className="form-control w-full max-w-xs">
        <label className="label">
        <span className="text-accent">Years of used</span>
        </label>
        <input type="number"
        placeholder="years " 
        name='yearsOfUsed'
        className="input input-bordered w-full max-w-xs" 
        {...register("yearsOfUsed", { required: true })}
        />
        {errors.yearsOfUsed && <span className='text-error'>years of used is required</span>}
        </div>
        {/* /--------- original price --------- */}
        <div className="form-control w-full max-w-xs">
        <label className="label">
        <span className="text-accent">Original price</span>
        </label>
        <input type="number"
        placeholder="Enter original price $" 
        name='originalPrice'
        className="input input-bordered w-full max-w-xs" 
        {...register("originalPrice", { required: true })}
        />
        {errors.originalPrice && <span className='text-error'>original Price is required</span>}
        </div>
        {/* /------- resalePrice ----- */}
        <div className="form-control w-full max-w-xs">
        <label className="label">
        <span className="text-accent">Resale Price </span>
        </label>
        <input type="number"
        placeholder="Enter your resale price $" 
        name='resalePrice'
        className="input input-bordered w-full max-w-xs" 
        {...register("resalePrice", { required: true })}
        />
        {errors.resalePrice && <span className='text-error'>resalePrice is required</span>}
        </div>

{/* --------- location ------ */}
        <div className="form-control w-full max-w-xs">
        <label className="label">
        <span className="text-accent">Meeting location</span>
        </label>
        <input type="text"
        placeholder="Enter your location" 
        name='meetingLocation'
        className="input input-bordered w-full max-w-xs" 
        {...register("meetingLocation", { required: true })}
        />
        {errors.meetingLocation && <span className='text-error'>meeting Location is required</span>}
        </div>
        {/* // ---------- add picture --------- */}
        <div className="form-control w-full max-w-xs">
        <label className="label">
        <span className="text-accent">Add product photo</span>
        </label>
        <input type="file"
        placeholder="Enter your Product photo" 
        name='productPhoto'
        className="input input-bordered w-full max-w-xs" 
        {...register("productPhoto", { required: true })}
        />
        {errors.productPhoto && <span className='text-error'>productPhoto is required</span>}
        </div>
        {/* ---- add description --- */}
        <div className="form-control w-full max-w-xs">
        <label className="label">
        <span className="text-accent">Add product description</span>
        </label>
        <input type="text"
        placeholder="Enter your Product photo" 
        name='productPhoto'
        className="textarea input-bordered w-full max-w-xs" 
        {...register("description", { required: true })}
        />
        {errors.description && <span className='text-error'>description is required</span>}
        </div>

      




      
       
        <div className="form-control w-full max-w-xs">
        
        <input type="submit" className='btn btn-primary input input-bordered w-full max-w-xs' />
        </div>
        </form>
        

        <ToastContainer
        position='top-center'
        ></ToastContainer>
    </div>
    );
};

export default AddProducts;