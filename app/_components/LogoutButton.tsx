"use client"
import React from 'react'
import { logoutAction } from '../actions/auth'
import { redirect } from 'next/navigation'


const LogoutButton = () => {
    const handleLogout = async()=>{
       await logoutAction()
       redirect('/')
    }
  return (
    <button className='h-full p-2 rounded-lg z-150 w-32 bg-red-700 text-white text-lg' onClick={handleLogout}>
        Logout
    </button>
  )
}

export default LogoutButton