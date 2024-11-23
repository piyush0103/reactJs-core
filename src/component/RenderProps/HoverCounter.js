import React, { Component } from 'react'

 class HoverCounter extends Component {
    // constructor(props) {
    //     super(props)
      
    //     this.state = {
    //        counte:0
    //     }
    //   }
    //   handleHover=()=>{
    //     this.setState((prevState,prevProps)=>{
    //         return{...this.state,counte:prevState.counte+1}
    //     })
    // }
  render() {

    const{counterState,counterName,handleCounter}=this.props
    return (
      <div onMouseOver={handleCounter}>HoverCounter

        <h1>HoverCounter {counterState}</h1>
        <textarea>{counterName}</textarea>
      </div>
    )
  }
}
export default HoverCounter