import React from 'react'
import { PowerIcon } from '@heroicons/react/16/solid'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/reducers/authSlice'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const Dashboard = () => {
    const disaptch = useDispatch()
    const navigate = useNavigate()
    const handleLogout = () => {
        disaptch(logout())
        navigate('/login')
        toast.success("Logout Successfully !")
    }
    return (
        <>
            <header className='h-16 py-2 px-6'>
                <ul className='flex justify-end items-center h-full'>
                    <button onClick={handleLogout}><li className='flex space-x-2'><PowerIcon className='size-5 text-red-400' /><span className='text-red-400'>Logout</span></li></button>
                </ul>
            </header>
            <main className='h-[calc(100vh-4rem)] flex justify-center items-center font-mono'>
                <h2 className='text-lg'>WELCOME !</h2>
            </main>
        </>
    )
}

export default Dashboard