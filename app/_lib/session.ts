import { cookies } from "next/headers";
import { User } from "../generated/prisma/client";



export async function setSession(userData: User){
    const {password,...rest} = userData
    const cookie = await cookies()
    cookie.set('session',JSON.stringify(rest),{
        httpOnly:true,
        secure: process.env.NODE_ENV==="production",
        maxAge:60*60*24*7,
        path:'/'
    })
}

export async function getSession():Promise<User|null>{
    const user = (await cookies()).get('session')?.value
    if(!user){
        return null
    }
    return JSON.parse(user)
}

export async function clearSession() {
    (await cookies()).delete('session')
}