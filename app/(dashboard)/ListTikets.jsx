import Link from 'next/link';
import React from 'react'


async function getTikets(){
    await new Promise ((resolve) => {
        setTimeout(() => {
            resolve();
        },3000);
    });
    const res = await fetch('http://localhost:4000/tickets',{
        next:{
            revalidate:0
        }
    }) 
    return res.json(); 
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
