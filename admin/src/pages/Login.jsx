import React, { useState } from 'react'
import { assets } from '../assets/assets.js';
import { useContext } from 'react';
import { AdminContext } from '../context/AdminContext.jsx';
import axios from 'axios';
import { toast } from 'react-toastify';
import { DoctorContext } from '../context/DoctorContext.jsx';


const Login = () => {
    // whenever we open Login-page default state will be admin
    const [state, setState] = useState('Admin');

    //create 2 state variable to store email and password
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');

    // to call API in login page need token and backend-Url from backend
    const {setAToken,backendUrl}=useContext(AdminContext);

    // get token and backendUrl from doctorContext
    const {setDToken}= useContext(DoctorContext)

    const onSubmitHandler= async(event)=>{
        event.preventDefault()
        try {
            
            if(state === 'Admin'){

                const {data} = await axios.post(backendUrl + '/api/admin/login',{email,password})
                if(data.success){

                    // store a token locally so that after-relode user able to log-in 
                    localStorage.setItem('aToken',data.token)

                    // save token instace variable
                    setAToken(data.token);
                }
                else{
                    toast.error(data.message)
                }
            } else {
               const {data}= await axios.post(backendUrl + '/api/doctor/login',{email,password})
                
                if (data.success) {

                    // store a token locally so that after-relode user able to log-in 
                    localStorage.setItem('dToken', data.token)

                    // save token instace variable
                    setDToken(data.token);
                    console.log(data.token);
                }
                else {
                    toast.error(data.message)
                }

            }

        } catch (error) {
            
        }
    }


    return (
        <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
            <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg'>
                <p className='text-2xl font-semibold m-auto'> <span className='text-primary'> {state} </span> Login</p>
                <div className='w-full'>
                    <p>Email</p>
                    <input onChange={(e)=>setEmail(e.target.value)} value={email} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="email" required />
                </div>
                <div className='w-full'>
                    <p>Password</p>
                    <input onChange={(e) => setPassword(e.target.value)} value={password} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="password" required />
                </div>
                <button className='bg-primary text-white w-full py-2 rounded-md text-base'>Login</button>
                {
                    state === 'Admin' 
                  ? <p>Doctor Login ? <span className='text-primary underline cursor-pointer' onClick={() => setState('Doctor')}>Click here</span></p>
                        : <p>Admin Login ? <span className='text-primary underline cursor-pointer' onClick={() => setState('Admin')}>Click here</span></p>
                }
            </div>
        </form>
    )
}

export default Login