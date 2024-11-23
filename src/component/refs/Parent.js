import React, { Component } from 'react'
import Child from './Child'
import ChildRef from './ChildRef'
import ForwardRef from './ForwordRef'
export default class Parent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       first:"hey"
    }

    this.inputRef=React.createRef()
  }

  clickHandler=()=>{
    this.inputRef.current.focus()
  }
  render() {
    return (
      <div>
{/* <Child></Child> */}
<ForwardRef ref={this.inputRef}></ForwardRef>
<button onClick={this.clickHandler}>focus input parent</button>
{/* <ChildRef></ChildRef> */}

      </div>
    )
  }
}
