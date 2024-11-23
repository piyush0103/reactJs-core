import axios from 'axios';
import React, { useEffect, useReducer } from 'react';
const intitialState = { loading: true, post: [], err: false };
const reducer = (state, action) => {
	switch (action.status) {
		case 'FETCH_SUCCESS':
			return { ...state, post: action.payload,loading:false };

		case 'FETCH_FAILURE':
			return { ...state, post: [], err: action.payload };

		case 'FETCH_LOADING':
			return { ...state, loading: true };

		default:
			break;
	}
};
export default function UseReducerWithFetch() {
	const [state, dispatch] = useReducer(reducer, intitialState);
	useEffect(() => {
		axios
			.get('https://jsonplaceholder.typicode.com/postds')
			.then((res) => {
				console.log('printing resss', res.data);
				setTimeout(() => {
					console.log('inside set timeout res');
                    dispatch({ status: 'FETCH_SUCCESS', payload: res.data });
				}, 10000);
                dispatch({ status: 'FETCH_LOADING', payload: 'IT IS LOADING' });

			})
			.catch((err) => {
				console.log('printing errr', err);
				setTimeout(() => {
					console.log('inside set timeout eerrr');
				}, 2000);
				dispatch({ status: 'FETCH_FAILURE', payload: err });
			});
	}, []);

	return (
		<div>
			UseReducerWithFetch
			{state.loading ? (
				<h1>Content is loading in few min</h1>
			) : (
				state.post.map((pst) => {
					return <h1 key={pst.id}>{pst.title}</h1>;
				})
			)}
		</div>
	);
}
