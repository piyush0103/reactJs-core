import React, { Component } from 'react';
import axios from 'axios';
export default class RequestServer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			login: null,
			users: null,
			posts: [],
		};
	}

	componentDidMount = () => {
		axios
			.get('https://jsonplaceholder.typicode.com/users')
			.then((respose) => {
				console.log(respose);
				this.setState({ ...this.state, users: respose.data });
			})
			.catch((err) => {
				console.log('error occurred');
			});
	};
	render() {
    const {login,posts,users}=this.state
		return (
			<div>
				RequestServer
				{users?users.map((user) => {
					return <h1>{user.name}</h1>;
				}):<h1>Nothing Found</h1>}
			</div>
		);
	}
}
