import { notFound } from 'next/navigation'
import React from 'react'

export const dynamicParams = true


export async function generateStaticParams(){
    const res = await fetch ('http://localhost:4000/tickets')

    const tikets = await res.json()

    return tikets.map((tiket)=>({
        id : tiket.id
}))
}

async function getTiket(id){
    const res = await fetch('http://localhost:4000/tickets/' + id,{
        next:{
            revalidate:10
        }
    })

    if(!res.ok){
        notFound()
    }

    return res.json()
}



export default async function  TiketsDetails({params}) {
    const tiket = await getTiket(params.id) 
    
  return (
    <main>
        <nav>
            <h2>Tickets Details</h2>
        </nav>
        <div className='card'>
            <h3>{tiket.title}</h3>
            <h4>Created by {tiket.user_email}</h4>
            <p>{tiket.body}</p>
            <div className={`pill ${tiket.priority}`}>
                    {tiket.priority} Priorty
            </div>

        </div>

    </main>
  )
}
