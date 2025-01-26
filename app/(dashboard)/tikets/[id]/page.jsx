import { notFound } from 'next/navigation'
import React from 'react'
import { resolve } from 'styled-jsx/css'

export const dynamicParams = true;


export async function generateMetadata({params}){
  const id = params.id

  const res = await fetch(`http://localhost:4000/tickets/${id}`)
  const tiket = await res.json()
  
  return{
      title: `Dojo-helpdesk | ${tiket.title}`
  }
}


export async function generateStaticParams(){
    const res = await fetch ('http://localhost:4000/tickets')

    const tikets = await res.json()

    return tikets.map((tiket)=>({
        id : tiket.id
}))
}   

async function getTiket(id){
    await new Promise ((resolve) => {
        setTimeout(() => {
            resolve();
        },3000);
    });
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
