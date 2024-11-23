import React from 'react'

export default function List() {
    const names=["hey"," baby", "there ","you","are"]
  return (
    <div>
{names.map((a,index)=>{
   return <h1 key={index}>{index}{a}</h1>
})}

    </div>
  )
}
