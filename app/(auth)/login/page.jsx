"use client"

import React from 'react'
import AuthForm from '../AuthForm'

export default function Login() {

  const handleSubmit = async (e ,email , password)=>{
    e.preventDefault()

    console.log("use login",email , password)
  }
  return (
    <main>
      <AuthForm handleSubmit={handleSubmit} />
    </main>
  )
}
