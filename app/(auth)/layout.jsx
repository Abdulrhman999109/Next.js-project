import React from 'react'
import Link from 'next/link'

export default function Authlayout({childern}) {
  return (
    <>
        <nav>
    <h1>Dojo-helpdesk</h1>
    <Link href="/login">Login</Link>
    <Link href="/register">     Register</Link></nav>
    {childern}
    </>
    
  )
}
