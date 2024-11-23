import React, { useState } from 'react'
import RunEffectOnlyOnce from './RunEffectOnlyOnce'

export default function CleanupEffect() {
    const [display, setdisplay] = useState(false)
  return (
    <div>

<button onClick={()=>setdisplay(!display)}>Display toggle</button>
{display&&<RunEffectOnlyOnce></RunEffectOnlyOnce>}
    </div>
  )
}
