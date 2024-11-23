import React, { Component } from 'react'

export default class ChildRef extends Component {
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
   clickHandler=()=>{
    console.log(this,' ok this prints fine')
    this.inputRef.current.focus()
   } 

   
        render() {
        return (
          <div>
    <label>child</label><input ref={this.inputRef}></input>
    <button onClick={this.clickHandler}>focus</button>
    <br></br>

    
          </div>
        )
      }
    }
    