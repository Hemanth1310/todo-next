"use client"
import React, { useActionState } from 'react'
import { registerAction } from '../actions/auth'

type RegisterActionType = {
    error:string|null
}

const initalState:RegisterActionType = {
    error:null
}

const RegisterForm = () => {
    const [state, formAction, isPending] = useActionState(registerAction,initalState)
  return (
    <form className='w-full space-y-5 flex flex-col items-center' action={formAction}>
        <input name="email" type='email' placeholder='email' className='w-full border border-foreground rounded-lg p-2'/>
        <input name="password" type='password' placeholder='password' className='w-full border border-foreground rounded-lg p-2'/>
        <input name="name" type='text' placeholder='name' className='w-full border border-foreground rounded-lg p-2'/>
       <button 
            type="submit" 
            className="h-full p-2 rounded-lg w-32 bg-foreground text-white text-lg"
        > {isPending ? 'Signing Up...' : 'Sign Up'}
        </button>
        {state?.error && <p className="text-red-500 text-sm">{state.error}</p>}
    </form>
  )
}

export default RegisterForm