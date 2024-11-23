import React, { Component } from 'react'

export default class RenderCounter extends Component {
        constructor(props) {
      super(props)
    
      this.state = {
         counte:0
      }
    }
    handleClickChange=()=>{
        this.setState((prevState,prevProps)=>{
            return{...this.state,counte:prevState.counte+1}
        })
    }
  render() {
    return (
      <div>{this.props.render(this.state.counte,this.handleClickChange)}</div>
    )
  }
}
