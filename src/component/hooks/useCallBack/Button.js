import React from 'react'

 function Button(props) {
    const{display,increment}=props
    console.log("Rendering BUtton Component    :: ",display)
  return (
    <div>
        <h1>Button-Component</h1>
        <button onClick={increment}>INCREMNT-{display} </button>
    </div>
  )
}
export default React.memo(Button)