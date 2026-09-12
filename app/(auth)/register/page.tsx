import RegisterForm from '@/app/_components/RegisterForm'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='flex-1 w-full min-h-full flex items-center justify-center'>
        <div className='max-w-2xl min-w-1/3 h-full p-5 flex flex-col gap-3 items-center border border-foreground  rounded'>
        <p className='text-2xl font-bold'>Register</p>
        <RegisterForm/>
        <p className='text-lg'>Already a User? <Link href='/login'>Click Here</Link></p>
    </div>
    </div>
  )
}

export default page