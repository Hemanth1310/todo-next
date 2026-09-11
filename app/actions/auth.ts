"use server"
import prisma from "@/lib/prisma"
import { error } from "console"
import { setSession } from "../_lib/session"
import { redirect } from "next/navigation"
import { UserCreateInput } from "../generated/prisma/models"

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
    redirect('/dashboard') 
  }

  return {
    error:null
  }
}

type resgisterState = {
    error:string|null
}


export async function registerAction(prevState:resgisterState, formData:FormData){
   const email = formData.get("email")?.toString()
  const password = formData.get("password")?.toString()
  const name = formData.get("name")?.toString()

  if (!email || !password || !name) {
    return {
      error: "All fields (email, password, name) are required."
    }
  }
    let isSuccess = false
    try{
            const existingUser = await prisma.user.findUnique({
        where: { email }
        })

        if (existingUser) {
        return {
            error: "An account with this email already exists."
        }
        }
        await prisma.user.create({
            data:{
                email:email,
                password:password,
                name:name
            }
        })

        isSuccess=true

    }catch(err){
        console.error("Registration Error:", err)
        return {
            error:"Unexpected error occured."
        }
    }

    if(isSuccess){
        redirect('/login')
    }
    return { error: null }
}
