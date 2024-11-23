import React, { Component } from 'react'
import UpdatedComponent from './HOFCounter'

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
    const{counterState,countHandler,counterName}=this.props
    return (
      <div onMouseOver={countHandler}>HoverCounter

        <h1>HoverCounter {counterState}</h1>
        <textarea>{counterName}</textarea>
      </div>
    )
  }
}
export default UpdatedComponent(HoverCounter,"HoVER_COUNTER")