import React, { Component } from 'react';
import ComponentC from './ComponentC';

export default class ComponentB extends Component {
	constructor(props) {
		super(props);

		this.state = {
			randomState: null,
		};
	}
	render() {
		return <div>
				<h1>ComponentB</h1>
			<ComponentC></ComponentC>
		</div>;
	}
}
