import React from 'react'

// export default function () {
//   return (
//     <div>
// <input></input>
//     </div>
//   )
// }


const FrInput=React.forwardRef((props,ref)=>{
    return(
        <div>
         <input type="text" ref={ref}></input>
           </div>
    )
})

export default FrInput