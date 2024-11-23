import React, { Component } from 'react'

export default class Child extends Component {
  constructor(props) {
    super(props)
    this.state = {
       first:"hey"
    }
    this.inputRef=React.createRef()
    this.cbref=null
    this.setRef=(e)=>{
        this.cbref=e
    }
  }

  componentDidMount=()=>{
    console.log("coming in component did moun ")
    // this.inputRef.current.focus()
    if(this.cbref){
        console.log(this.cbref)
this.cbref.focus()
    }
  }
    render() {
    return (
      <div>
<label>child</label><input ref={this.inputRef}></input>
<br></br>
<label>child</label><input ref={this.setRef}></input>

      </div>
    )
  }
}
