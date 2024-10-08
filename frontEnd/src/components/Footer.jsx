import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { useNavigate } from 'react-router-dom'

const Footer = () => {

    const navigate= useNavigate();
    return (
        <div className='md:mx-10'>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                {/*----------Left section------- */}
                <div>
                    <img className='mb-5 w-40' src={assets.logo} alt="" />
                    <p className='w-full md:w-2/3 text text-gray-600 leading-6'>To create a world where accessing quality healthcare is as simple as a click, ensuring that everyone, everywhere, can connect with trusted medical professionals when they need it most.</p>
                </div>

                {/* ---------- Center section ----------- */}
                <div>
                    <p className='text-x1 font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li className='cursor-pointer' onClick={() => { navigate('/'), window.scrollTo({ top: 0, behavior: 'smooth' }) }}>Home</li>
                        <li className='cursor-pointer' onClick={() => { navigate('/about'), window.scrollTo({ top: 0, behavior: 'smooth' }) }}>About Us</li>
                        <li className='cursor-pointer' onClick={() => { navigate('/contact'), window.scrollTo({ top: 0, behavior: 'smooth' }) }}>Contact Us</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                {/* ----------- right section ----------- */}
                <div>
                    <p className='text-x1 font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>+91-9876543210</li>
                        <li>PresciptoDoctors@gmail.com</li>
                    </ul>
                </div>
            </div>
            <div>
                {/* ------------ CopyRight Text -------------- */}
                <hr />
                <p className='py-5 text-sm text-center'>Copyright 2024@ Prescripto - All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer