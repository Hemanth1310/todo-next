import prisma from "@/lib/prisma";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = false

  if(session){
    redirect('/dashboard')
  }

  return (
    <div className="">
        Welcome
    </div>
  );
}
