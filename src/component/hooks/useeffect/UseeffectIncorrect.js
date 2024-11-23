import React, { useEffect, useState } from 'react'

export default function UseeffectIncorrect() {
    const [count, setcount] = useState(0)
    useEffect(() => {
     const interval= setInterval(() => {
        setcount(prevcount=>prevcount+1)
      }, 1000);
    
      return () => {
        console.log("clean up intervalllll")
        clearInterval(interval)
      }
    }, [])
    
  return (
    <div>UseeffectIncorrect

        <h1>Count value: {count}</h1>
    </div>
  )
}
