import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function Authlayout({children}) {
  return (
    <>
    <nav>
    <Navbar />
    <Link href="/login">Login</Link>
    <Link href="/register">Register</Link></nav>
    {children}
    </>
    
  )
}
