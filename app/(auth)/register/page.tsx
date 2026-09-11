import RegisterForm from '@/app/_components/RegisterForm'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='w-1/3 h-full p-5 flex flex-col gap-3 items-center border border-foreground  rounded'>
        <p className='text-2xl font-bold'>Register</p>
        <RegisterForm/>
        <p className='text-lg'>Already a User? <Link href='/login'>Click Here</Link></p>
    </div>
  )
}

export default page