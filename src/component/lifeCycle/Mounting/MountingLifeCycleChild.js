import React, { Component } from 'react'

export default class MountingLifeCycleChild extends Component {
    constructor(props) {
      super(props)
      console.log(" child::constructor ",props)
    
      this.state = {
         first:'randomState'
      }
    }

    static getDerivedStateFromProps = (props, state) => {
		console.log('  child :::getDerivedStateFromProps is exwecuted state :: ',state);
		console.log(" child ::: prinitng props ::",props)
		return state;
	};

    componentDidMount=()=>{
        console.log(" child:: component did mount")
    }


    shouldComponentUpdate (){
		console.log("child::  shouldComponentUpdates ::")
return true;
	}

	getSnapshotBeforeUpdate(prevProps,prevState){	
	console.log("child::  getSnapshotBeforeUpdate ::",prevProps+"  ",prevState)
	}

componentDidUpdate(){
	console.log("child::  componentDidUpdate ::")
}

handleStateChange=()=>{
    console.log('handle state change ',this)
    this.setState({first:'omniState'})
}
  render() {
    console.log(" child::render")
    return (
      <div>MountingLifeCycleChild
        <h1> parents name::  {this.props.name}</h1>
        <button onClick={this.handleStateChange}> change state child A</button>
      </div>
    )
  }
}
