import React, { Component } from 'react'


 class ClickCounter extends Component {
    // constructor(props) {
    //   super(props)
    
    //   this.state = {
    //      counte:0
    //   }
    // }
    // handleClickChange=()=>{
    //     this.setState((prevState,prevProps)=>{
    //         return{...this.state,counte:prevState.counte+1}
    //     })
    // }
  render() {
    const{counterState,counterName,handleCounter}=this.props

    return (
      <div>ClickCounter

<h1>CLICK COUNTER COUNT {counterState}</h1>
<textarea>{counterName}</textarea>
<button onClick={handleCounter}>increment-counter</button>
      </div>
    )
  }
}

export default ClickCounter