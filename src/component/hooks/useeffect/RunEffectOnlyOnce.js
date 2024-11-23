import React, { useEffect, useState } from 'react'
// component did mount mimick
export default function RunEffectOnlyOnce() {
const [x, setx] = useState(0)
const [y, sety] = useState(0)

const logMousePosition=(e)=>{
    console.log("Inside log mouse position    :::   ",e.clientX)
    setx(e.clientX)
    sety(e.clientY)
}
useEffect(() => {
    console.log(" useeffect called")
 window.addEventListener('mouseover',logMousePosition)

 return ()=>{
    console.log("cleanup operation ")
    window.removeEventListener('mouseover',logMousePosition)
 }
},[])

  return (
    <div>
<h1>MOUSE Cordinates x={x}</h1>
<h1>MOUSE Cordinates y={y}</h1>


    </div>
  )
}
