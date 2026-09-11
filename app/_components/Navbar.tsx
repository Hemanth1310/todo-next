import { ClipboardCheck } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import LogoutButton from './LogoutButton'
import { getSession } from '../_lib/session'


const Navbar = async() => {
    const session = await getSession()

  return (
    <div className='z-100 w-screen  bg-taupe-300 h-16 shadow-md flex justify-center'>
        <div className='container pl-5 pr-5 h-full flex items-center justify-between '>
            <Link href='/' className='flex items-center space-x-1'>
                <ClipboardCheck color="#393e46" />
                <p className='font-bold text-xl'>Todoer</p>
            </Link>
            <div className='flex items-center justify-between'>
                {session?<>
                    <LogoutButton/>
                </>:<div className='flex space-x-4 text-lg'>
                    <Link className='active:text-red-200 hover:underline hover:font-bold' href='/login'>Login</Link>
                     <Link className='hover:underline hover:font-bold' href='/login'>Register</Link>
                </div>}

            </div>
        </div>
    </div>
  )
}

export default Navbar