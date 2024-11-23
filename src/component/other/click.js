import React, { Component } from 'react'

export default class click extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count:0,
       name:"kutt"
    }
  }
  handleClick=()=>{
    console.log(" ================================================= ",this)
    this.setState(prevState=>{
        console.log("coming here " ,prevState)
        // this.state.count=prevState.count+1
        return{count:this.state.count+=1}
    })

    // this.setState({count:this.state.count+1},()=>{
    //     console.log("calls to set state are asynchronous hehe ",this.state.count)
    // })
    // console.log("calls to set state are asynchronous  ",this.state.count)

    this.props.callMe(this.state.name)
  }

    render() {
    return (
      <div>
        <h1>count {this.state.count}</h1>

<button onClick={this.handleClick}>increment</button>
      </div>
    )
  }
}
