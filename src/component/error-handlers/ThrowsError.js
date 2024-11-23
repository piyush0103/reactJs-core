import React from 'react'

export default function ThrowsError(props) {
    if(props.name==="PP"){
        throw new Error("Stupid NAME")
    }
  return (
    <div><h1>{props.name}</h1></div>
  )
}
