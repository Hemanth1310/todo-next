import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
     <div className='w-1/3 h-1/3 flex flex-col items-center border border-foreground bg-red-400 rounded'>
        Login
        <p>Not a User? <Link href='/register'>Click Here</Link></p>
    </div>
  )
}

export default page