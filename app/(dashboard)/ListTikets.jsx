import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import Link from 'next/link';
import React from 'react'
import { cookies } from 'next/headers';


async function getTikets(){
    const supabase = createClientComponentClient({cookies})
    
    const {data , error} = await supabase.from ("Tickets")
        .select()

    if(error){
        console.log(error.message)
    }

    return data
}



export default async function ListTikets() {
  const tikets = await getTikets()
    
  
  return (
    
        <>
            {tikets.map((tiket) =>(
                <div key={tiket.id} className='card my-5'>
                <Link href={`/tikets/${tiket.id}`}>
                    <h3>{tiket.title}</h3>
                    <p>{tiket.body.slice(0,200)}...</p>
                    <div className={`pill ${tiket.priority}`}>
                        {tiket.priority} Priorty
                    </div>
                </Link>
                </div>
            ))}
            {tikets.length===0 &&(
                <p className='text-center'>There are no open tikets</p>
            )}
        </>
  )
}
