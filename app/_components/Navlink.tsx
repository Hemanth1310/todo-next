"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type Props = {
    children:React.ReactNode,
    href:string
}

const Navlink = ({children,href}: Props) => {
    const path = usePathname()
    const isActive = path===href
  return (
   <Link className={`hover:underline hover:font-bold ${isActive?'font-bold underline text-foreground' 
          : 'text-gray-500'}`} href={href}>{children}</Link>
  )
}

export default Navlink