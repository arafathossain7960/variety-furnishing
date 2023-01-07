import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const Login = () => {
    const {loginUser, googleSingIn }=useContext(AuthContext);
    const { register, handleSubmit,  formState: { errors } } = useForm();
  
  // login function
  const handleRegister =(data)=>{
      const email = data.email;
      const password = data.password;

loginUser(email, password)
    .then(result =>{
        console.log(result)
    })
    .catch(error =>{
        console.log(error)
    })
   

}
     // google handler
     const handleGoogleSignIn =()=>{
        googleSingIn()
        .then(result =>{
            console.log(result)
        })
        .catch(error => {
            console.log(error)
        })
    }
    return (
        <div className='mx-auto w-96 my-32 text-black shadow border round p-10'>
        <h3 className='text-center text-2xl text-primary'>Please Sign up</h3>

 <form onSubmit={handleSubmit(handleRegister)}>
 
 


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








{/* <div className="form-control w-full max-w-xs "> */}

<label className="label text-success">
<span className="text-accent text-small">Don't have account <Link to='/register' className='underline-offset-1'>Please create account</Link></span>
</label>

{/* </div> */}
 
   
  <input type="submit" value='LOGIN' className='btn btn-primary input input-bordered w-full max-w-xs' />
</form>
<div className="divider">OR</div>

<div>
    <button className='btn btn-outline text-primary input input-bordered w-full max-w-xs' onClick={handleGoogleSignIn}>Sign up with google</button>
</div>
    </div>
    );
};

export default Login;