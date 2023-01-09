import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { json, Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import { accessToken } from '../../../hooks/myhooks';

const Register = () => {
    const {googleSingIn, createUser, updateUser}=useContext(AuthContext);
    const { register, handleSubmit,  formState: { errors } } = useForm();

    const handleRegister =(data)=>{
        const name = data.fullName;
        const email = data.email;
        const password = data.password;
        const accountType = data.accountType;
        const userAccountInfo = {name, email, accountType, role:'', adminVerify:false };

        createUser(email, password)
        .then(result =>{
            updateUser(name)
            .then(updateSuccess =>{
                console.log(updateSuccess)
                saveUser(userAccountInfo);
            })
            .catch(updateFail =>{
                console.log(updateFail)
                
            })
        })
        .catch(error =>{
            console.log(error)
        })
       

    }

    // google handler
    const handleGoogleSignIn =()=>{
        googleSingIn()
        .then(result =>{
            const name = result.user.displayName;
            const email = result.user.email;
            const userAccountInfo = {name, email, accountType:'buyer', role:'', adminVerify:false };
            saveUser(userAccountInfo);
        })
        .catch(error => {
            console.log(error)
        })
    }

    const saveUser=userInfo=>{
        fetch('http://localhost:5000/user',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(userInfo)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.insertedId){
                alert('user success fully created');
                accessToken(userInfo.email)
            }
               
        })
    }
    return (
        <div className='mx-auto w-96 my-32 text-black shadow border round p-10'>
            <h3 className='text-center text-2xl text-primary'>Please Sign up</h3>

     <form onSubmit={handleSubmit(handleRegister)}>
     
     

    <div className="form-control w-full max-w-xs">
     <label className="label">
    <span className="text-accent">What is your name</span>
  </label>
  <input type="text"
   placeholder="Enter your name" 
   name='fullName'
   className="input input-bordered w-full max-w-xs" 
   {...register("fullName", { required: true })}
   />
 {errors.fullName && <span className='text-error'>Your full name required</span>}
</div>
    <div className="form-control w-full max-w-xs">
     <label className="label">
    <span className="text-accent">Your email</span>
  </label>
  <input type="email"
   placeholder="Enter your valid email address" 
   name='email'
   className="input input-bordered w-full max-w-xs" 
   {...register("email", { required: true })}
   />
 {errors.email && <span className='text-error'>Required valid email</span>}
</div>


    <div className="form-control w-full max-w-xs">
     <label className="label">
    <span className="text-accent">Enter password</span>
  </label>
  <input type="password"
   placeholder="Enter your password" 
   name='password'
   className="input input-bordered w-full max-w-xs" 
   {...register("password", { required: true, minLength: 6 })}
   />
 {errors.password && <span className='text-error'>Password length minimum 6</span>}
</div>

{/* option ------------------------------- */}
    <div className="form-control w-full max-w-xs">
     <label className="label">
    <span className="text-accent">Select account type</span>
  </label>
  <select className='input text-accent' {...register("accountType")}>
        <option value="seller">seller</option>
        <option selected value="buyer">buyer</option>
      </select>

</div>

   


    {/* <div className="form-control w-full max-w-xs">
     <label className="label">
    <span className="text-accent">Photo url</span>
  </label>
  <input type="file"
   placeholder="Enter your image link" 
   name='photoUrl'
   className="input input-bordered w-full max-w-xs" 
   {...register("photoUrl", { required: true})}
   />
 {errors.photoUrl && <span className='text-error'>You must add your image link</span>}
</div> */}

    {/* <div className="form-control w-full max-w-xs "> */}
  
    <label className="label text-success">
    <span className="text-accent text-small">Hve an account <Link to='/login' className='underline-offset-1'>Please login</Link></span>
  </label>

{/* </div> */}
     
       
      <input type="submit" className='btn btn-primary input input-bordered w-full max-w-xs' />
    </form>
    <div className="divider">OR</div>

    <div>
        <button className='btn btn-outline text-primary input input-bordered w-full max-w-xs' onClick={handleGoogleSignIn}>Sign up with google</button>
    </div>
        </div>
    );
};

export default Register;