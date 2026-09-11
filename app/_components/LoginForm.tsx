"use client"
import React, { useActionState, useState } from 'react'
import { loginAction } from '../actions/auth'

type ActionState = {
  error?: string | null;
}

const initialState: ActionState = {
  error: null
}

const LoginForm = () => {
     const [state, formAction] = useActionState(loginAction,initialState)

  return (
    <form className='w-full space-y-5 flex flex-col items-center' action={formAction}>
        <input name="email" type='email' placeholder='email' className='w-full border border-foreground rounded-lg p-2'/>
        <input name="password" type='password' placeholder='password' className='w-full border border-foreground rounded-lg p-2'/>
       <button 
            type="submit" 
            className="h-full p-2 rounded-lg w-32 bg-foreground text-white text-lg"
        > Sign In
        </button>
        {state?.error && <p className="text-red-500 text-sm">{state.error}</p>}
    </form>
  )
}

export default LoginForm