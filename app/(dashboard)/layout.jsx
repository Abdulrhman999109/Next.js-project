import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'




export default function layout({children}) {
  return (
    <>
        <nav>
            <Navbar />
            <Link href={"/"}>Dashboard</Link>
            <Link href={"/tikets"}>Tikets</Link>
        </nav>
        {children}
    </>
  )
}
