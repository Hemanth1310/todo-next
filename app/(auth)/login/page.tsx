import LoginForm from '@/app/_components/LoginForm'
import Link from 'next/link'

import React from 'react'

const Login = async() => {
  return (
    <div className='flex-1 w-full min-h-full flex items-center justify-center'>
        <div className='max-w-2xl min-w-1/3 h-full p-5 flex flex-col gap-3 items-center border border-foreground  rounded'>
            <p className='text-2xl font-bold'>Login</p>
            <LoginForm/>
            <p className='text-lg'>Not a User? <Link href='/register'>Click Here</Link></p>
        </div>
    </div>
  )
}

export default Login