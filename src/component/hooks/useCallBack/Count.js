import React from 'react'

 function Count(prop) {
    const{names,val}=prop
    console.log("INSIDE COUNT COMPONSNTs ",names)

  return (
    <div>
<h1>Count Component {names}: {val} </h1>

    </div>
  )
}
export default React.memo(Count)