import React, { useContext, useEffect } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { AppContext } from '../../context/AppContext'
import { assets } from '../../assets/assets'

const DoctorAppointments = () => {

    const { dToken, appointments, getAppointments, completeAppointment, cancelAppointment } = useContext(DoctorContext)

    const { calculateAge, slotDateFormat, currency } = useContext(AppContext)

    useEffect(() => {
        if (dToken) {
            getAppointments()
        }
    }, [dToken])

    return (
        <div className=' w-full max-w-6xl m-5'>
            <p className=' mb-3 text-lg font-medium'>All Appointments</p>

            <div className='bg-white border rounded text-sm max-h-[80vh] min-h-[50vh] overflow-y-scroll'>
                <div className='max-sm:hidden grid grid-cols-[0.5fr_2fr_1fr_1fr_3fr_1fr_1fr] gap-1 py-3 px-6 border-b'>
                    <p>#</p>
                    <p>Patients</p>
                    <p>Payments</p>
                    <p>Age</p>
                    <p>Date & Time</p>
                    <p>Fees</p>
                    <p>Actions</p>
                </div>

                {
                    appointments.reverse().map((item, index) => (
                        <div className='flex flex-wrap justify-between max-sm:gap-5 max-sm:text-base sm:grid grid-cols-[0.5fr_2fr_1fr_1fr_3fr_1fr_1fr] gap-1 items-center text-gray-500 py-3 px-6 border-b hover:bg-gray-100' key={index}>
                            <p className='max-sm:hidden'>{index + 1}</p>
                            <div className='flex items-center gap-2'>
                                <img className='w-12 rounded-full' src={item.userData.image} alt="" /> <p>{item.userData.name}</p>
                            </div>

                            <div>

                                <p className='inline'>
                                    {
                                        item.payment ? (
                                            <img className='w-20' src={assets.razorpay_logo} alt="" />
                                        ) : (
                                            <span className='text-xs border border-primary px-3 rounded-full'>Cash</span>
                                        )
                                    }
                                </p>
                            </div>
                            <p className='ml-1 max-sm:hidden '>{calculateAge(item.userData.dob)}</p>
                            <p>{slotDateFormat(item.slotDate)}, {item.slotTime}</p>
                            <p>{currency} {item.amount}</p>

                            {
                                item.cancelled
                                    ? <p className='text-red-500 text-md font-medium'>Appointment Cancelled</p>
                                    : item.isCompleted
                                        ? <p className='text-green-500 text-md font-medium'>Appointment Completed</p>
                                        : <div className='flex'>
                                            <img onClick={() => cancelAppointment(item._id)} className='w-10 cursor-pointer' src={assets.cancel_icon} alt="" />
                                            <img onClick={() => completeAppointment(item._id)} className='w-10 cursor-pointer' src={assets.tick_icon} alt="" />
                                        </div>
                            }



                        </div>

                    ))
                }

            </div>
        </div>
    )
}

export default DoctorAppointments