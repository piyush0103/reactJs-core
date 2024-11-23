import React, { useState } from 'react'

export default function Counter() {
    const [counter, setcounter] = useState(0)
   const handleClick=(e)=>{
    setcounter((prevState)=> prevState+1)}
  const increment5=(e)=>{
    for(let i=0;i<5;i++){
        handleClick(e)
    }
  }
    return (
    <div><h1>{counter}</h1>
    <button onClick={handleClick}>Increwment</button>
    <button onClick={increment5}>Increwment5</button>
    </div>
  )
}
