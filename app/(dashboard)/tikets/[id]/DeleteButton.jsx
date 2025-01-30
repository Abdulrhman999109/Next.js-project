"use client"


import { useTransition } from 'react'
import { DeleteTicket } from '../action'

export default function DeleteButton({ id }) {
  let [isPending, startTransition] = useTransition()

  return (
    <button 
      className="btn-primary" 
      onClick={() => startTransition(() => DeleteTicket(id))}
      disabled={isPending}
    >
      {isPending && (
        <>
          Deleting....
        </>
      )}
      {!isPending && (
        <>
          Delete Ticket
        </>
      )}
    </button>
  )
}