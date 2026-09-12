import prisma from "@/lib/prisma";
import { getSession } from "./session";



export async function getTodos (){
    const user = await getSession()

    if(!user){
        console.log('User not logged in')
         throw new Error("USer not logged in")
    }

    try{
        const todos = await prisma.todo.findMany({
            where:{
                authorId:user?.id
            }
        })
        return todos
    }catch{
        console.log('No todos available')
        throw new Error("Something went wrong")
    }
} 