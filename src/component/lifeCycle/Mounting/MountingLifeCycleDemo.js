import React, { Component } from 'react';
import MountingLifeCycleChild from './MountingLifeCycleChild';

export default class MountingLifeCycleDemo extends Component {
	constructor(props) {
		super(props);
		console.log('constructor is exwecuted MountingLifeCycleDemo ');
		this.state = {
			name: 'Piyush',
		};
	}

	shouldComponentUpdate (){
		console.log("PARENT::  shouldComponentUpdates ::")
return true;
	}

	getSnapshotBeforeUpdate(prevProps,prevState){	
	console.log("PARENT::  getSnapshotBeforeUpdate ::",prevProps+"  ",prevState)
	}

componentDidUpdate(){
	console.log("PARENT::  componentDidUpdate ::")

}

	static getDerivedStateFromProps = (props, state) => {
		console.log('getDerivedStateFromProps is exwecuted state :: ',state);
		console.log("prinitng props ::",props)
		return state;
	};
	componentDidMount = () => {
		console.log('componentDidMount is exwecuted');
	};

	handleStateChange=()=>{
		console.log('handle state change parent   ',this)
		this.setState({name:'ayush'})
	}
	render() {
		console.log('render is exwecuted');
		return <div>MountingLifeCycleDemo
			<button onClick={this.handleStateChange}> change state parent A</button>
<MountingLifeCycleChild name={this.state.name}></MountingLifeCycleChild>

		</div>;
	}
}
