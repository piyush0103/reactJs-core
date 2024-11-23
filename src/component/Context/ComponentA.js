import React, { Component } from 'react';
import { UserConsumer, UserProvider } from './UserContext';
import ComponentB from './ComponentB';
export default class ComponentA extends Component {
	constructor(props) {
		super(props);

		this.state = {
			randomState: null,
		};
	}
	render() {
		return (
			<div>
				<h1>ComponentA</h1>
				<UserProvider value={{names:"piyush",age:31,salary:56464}}>
					<ComponentB></ComponentB>
				</UserProvider>
			</div>
		);
	}
}
