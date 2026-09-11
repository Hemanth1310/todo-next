"use server"
import prisma from "@/lib/prisma"
import { error } from "console"
import { setSession } from "../_lib/session"
import { redirect } from "next/navigation"

export type ActionState = {
  error?: string | null;
}

export const loginAction = async(prevState: ActionState, formData: FormData)=>{
    const username = formData.get('email')?.toString()
    const password = formData.get('password')?.toString()
    let isSuccess = false
    try{
        const userData = await prisma.user.findUnique({
            where:{
                email:username
            }
        })
        if(!userData){
            return {
                error:"User not found",
            }
        }

        if(userData.password !== password){
            return {
                error:"Password incorrect"
            }
        }
        await setSession(userData)

        isSuccess=true
    }catch{
        return {
                error:"Login Failed: Unexpected error"
        }
    }

    if (isSuccess) {
    redirect('/dashboard') // 👈 Change to your target route
  }

  return {
    error:null
  }
}

