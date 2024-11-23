import React, { Component } from 'react'
const UpdatedComponent=(OriginalComponent,args)=>{
 console.log("BY ANY CHANCE COMINING HEREE  ?")
    
    class HOFCounter extends Component {
        constructor(props) {
            super(props)
          
            this.state = {
               counte:0,
               additionalState:null
            }
          }
          handleClickChange=()=>{
              this.setState((prevState,prevProps)=>{
                  return{...this.state,counte:prevState.counte+1}
              })
            // this.setState({...this.state,counte:this.state.counte+1})
          }
      render() {
        return (
          <OriginalComponent counterName={args} counterState={this.state.counte} countHandler={this.handleClickChange}></OriginalComponent>        
          )
      }
    }
  return HOFCounter  
}
export default UpdatedComponent