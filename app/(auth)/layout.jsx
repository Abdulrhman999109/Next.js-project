import Link from "next/link"
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { redirect } from 'next/navigation'
import { cookies } from "next/headers"

export default async function AuthLayout({ children }) {
  const supabase = createServerComponentClient({ cookies })
  const { data } = await supabase.auth.getSession()

  if(data.session){
    redirect('/')
  }
  return (
    <>
      <nav>
        <h1>Dojo Helpdesk</h1>
        <Link href="/register">Sign up</Link>
        <Link href="/login">Login</Link>
      </nav>
      {children}
    </>
  )
}
