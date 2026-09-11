import LoginForm from '@/app/_components/LoginForm'
import Link from 'next/link'

import React from 'react'

const Login = async() => {
  return (
    <div className='w-1/3 h-full p-5 flex flex-col gap-3 items-center border border-foreground  rounded'>
        <p className='text-2xl font-bold'>Login</p>
        <LoginForm/>
        <p className='text-lg'>Not a User? <Link href='/register'>Click Here</Link></p>
    </div>
  )
}

export default Login