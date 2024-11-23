import React from 'react'
import './myStyle.css'
export default function StyleSheet(props) {
    const style=props.cName
  return (
    <div className={`${style} font-xl`}>StyleShdwdwdeet</div>
  )
}
