"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function CreateForm() {

    const router = useRouter()

    const [title , setTitle] =useState('')
    const [body , setBody] = useState('')
    const [priority , setPriority] = useState('low')
    const [isloading , setIsloading] = useState(false)

    const handelsubmit=(async(e)=>{
        e.preventDefault()
        setIsloading(true)

        const NewTiket = {title, body , priority , user_email: 'Abdulrhman@netninja.dev'}

        const res = await fetch ('http://localhost:4000/tickets',{
            method:'POST',
            headers:{'Content-Type' : 'application/json'},
            body: JSON.stringify(NewTiket)
        })
        if (res.status === 201) {
            router.refresh()
            router.push('/tikets')
          }
    })



  return (
    
    <form onSubmit={handelsubmit} className="w-1/2">
      <label>
        <span>Title:</span>
        <input
          required 
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </label>
      <label>
        <span>Title:</span>
        <textarea
          required
          onChange={(e) => setBody(e.target.value)}
          value={body}
        />
      </label>
      <label>
        <span>Priority:</span>
        <select 
          onChange={(e) => setPriority(e.target.value)}
          value={priority}
        >
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>
      </label>
      <button className='btn-primary'
      disabled={isloading}>
        {isloading && <span> add..</span>}
        {!isloading && <span>Add Ticket</span>}
      </button>
    </form>
  )
}
