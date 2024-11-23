import React, { Component } from 'react';
import UserContext, { UserConsumer, UserProvider } from './UserContext';

 class ComponentC extends Component {
	constructor(props) {
		super(props);

		this.state = {
			randomState: null,
		};
	}
	render() {
		return (
			<div>
				<h1> efefefeef {this.context.names}</h1>
				<UserConsumer>
					{(person) => {
						{
							console.log("printing prop ",person)
							for (const prop in person){
							
								return <h1>Recieved Contect in {person[prop]} </h1>;
						
								}	}
					}}
				</UserConsumer>
			</div>
		);
	}
}
ComponentC.contextType=UserContext
export default ComponentC