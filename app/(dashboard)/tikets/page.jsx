import React, { Suspense } from 'react'
import ListTikets from '../ListTikets'
import Link from 'next/link'
import Loading from '../loading'


export const metadata = {
  title: 'Dojo-Helpdesk | Tickets',
}

export default function Tikets() {
  return (
    <main>
        <h2>
            Tikets
        </h2>
        <Suspense fallback={<Loading/>}>
        <Link href="/tikets/createtiket">
          <button className="btn-primary">Add Ticket</button>
        </Link>
          <ListTikets/>
        </Suspense>
        
    </main>
  )
}
