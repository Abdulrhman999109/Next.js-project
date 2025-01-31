"use client"

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import React, { useState } from 'react'
import AuthForm from '../AuthForm'
import { useRouter } from 'next/navigation'
import { cookies } from 'next/headers';

export default function Rigster(){

  const [error , setError] = useState('')
  const Router = useRouter()


  const handleSubmit = async (e ,email , password)=>{
    e.preventDefault()

  const supabase = createClientComponentClient({cookies})
  const {error} = await supabase.auth.signUp({
    email,
    password,
    options:{
      emailRedirectTo:`https://dojo-helpdesk-aqw2l7hox-abdulrhmanbalubaids-projects.vercel.app/api/auth/callback`
    }
  })

  if(error){
    setError(error.message)
  }
  if(!error){
    Router.push('/Verify')
  }

    console.log("use Sign up",email , password)}
  return (
    <main>
      <AuthForm handleSubmit={handleSubmit} />
      {error && (
        <div className="error">{error}</div>
      )}
    </main>
  )
}
