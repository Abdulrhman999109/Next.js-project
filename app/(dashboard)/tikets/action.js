'use server'

import { createServerActionClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function AddTickts(formData) {
    const ticket = Object.fromEntries(formData)

    const supabase = createServerActionClient({cookies})

    const {data:{session}} = await supabase.auth.getSession()


    const {error} = await supabase.from('Tickets')
    .insert({
        ...ticket,
        user_email : session.user.email,
    })

    if(error){
        throw new Error('Could Not add a ticket')
    }
    revalidatePath('/tikets')
    redirect('/tikets')
}



export async function DeleteTicket(id) {
    const supabase = createServerActionClient({ cookies })

    const { error } = await supabase.from('Tickets')
      .delete()
      .eq('id', id)
    
    if (error) {
      throw new Error('Could not delete the ticket.')
    }
  
    revalidatePath('/tikets')
    redirect('/tikets')
  } 
