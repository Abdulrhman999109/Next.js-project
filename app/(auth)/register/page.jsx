"use client"

import React from 'react'
import AuthForm from '../AuthForm'

export default function Rigster(){
  const handleSubmit = async (e ,email , password)=>{
    e.preventDefault()

    console.log("use Sign up",email , password)}
  return (
    <main>
      <AuthForm handleSubmit={handleSubmit} />
    </main>
  )
}
