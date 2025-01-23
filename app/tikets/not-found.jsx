import React from 'react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className='text-center'>
      <h1 className='text-3xl'>There was a problem</h1>
      <p>Not found the ticket you looking for</p>
      <p>Back to<Link className='text-blue-400' href="/tikets"> Ticket Page</Link></p>
    
    </main>
  )
}