import { notFound } from 'next/navigation'
import React from 'react'
import { cookies } from 'next/headers';
import { resolve } from 'styled-jsx/css'
import DeleteButton from './DeleteButton';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';


export async function generateMetadata({params}){
  const supabase = createServerComponentClient({cookies})
  const {data :ticket} = await supabase.from('Tickets')
  .select()
  .eq('id',params.id)
  .single()
  return{
    title:`Dojo Helpdesk | ${ticket?.title || 'Ticket Not Found'}`
    }
}

async function getTiket(id){
  const supabase = createServerComponentClient({cookies})
  const {data} = await supabase.from('Tickets')
  .select()
  .eq('id' ,id)
  .single()

    if(!data){
        notFound()
    }

    return data
}



export default async function  TiketsDetails({params}) {
  const tiket = await getTiket(params.id) 

  const supabase = createServerComponentClient({ cookies })
  const { data } = await supabase.auth.getSession()

return (
  <main>
      <nav>
          
          <h2>Tickets Details</h2>
          <div className="ml-auto">
          {data.session.user.email === tiket.user_email && (
            <DeleteButton id={tiket.id} />
          )}
        </div>
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
