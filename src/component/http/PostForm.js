import axios from 'axios';
import React, { Component } from 'react';

export default class PostForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			userId: '',
			title: '',
			body: '',
		};
	}
	handleChangeEvent = (e) => {
		console.log(e, 'here');
		const { name, value } = e.target;
		this.setState((prevState, prevProps) => {
			return { ...this.state, [name]: value };
		});
	};
	submitHandler = (e) => {
        e.preventDefault()
        console.log('coming here in submit',e)
		axios
			.post('https://jsonplaceholder.typicode.com/posts', this.state)
			.then((response) => {
				console.log('what is the response', response);
			})`1`
			.catch((err) => {
				console.log('some issue with error ', err);
			});
	};
	render() {
		const { userId, title, body } = this.state;
		return (
			<div>
				<h1>Post Form</h1>

				<form action={this.submitHandler}method='post'>
					<div>
						<label htmlFor=''>USERID</label>
						<input
							type='text'
							name={'userId'}
							value={userId}
							onChange={this.handleChangeEvent}
						></input>
					</div>
					<div>
						<label htmlFor=''>TITLE</label>
						<input
							type='text'
							name={'title'}
							value={title}
							onChange={this.handleChangeEvent}
						></input>
					</div>
					<div>
						<label htmlFor=''>BODY</label>
						<input
							type='text'
							name={'body'}
							value={body}
							onChange={this.handleChangeEvent}
						></input>
					</div>
					<div>
						<button type='submit' onClick={this.submitHandler}>
							SubmitForm
						</button>
					</div>
				</form>
			</div>
		);
	}
}
