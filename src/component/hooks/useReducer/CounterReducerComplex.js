import React, { useReducer } from 'react';
const initialState = { counter: 0, type: null, message: '' };
const reducer = (state, action) => {
	switch (action.type) {
		case 'increment':
			return {...state,counter:state.counter+1,message:'COUNTER INCREMENTED'};

		case 'decrement':
			return{...state,counter:state.counter-11,message:'COUNTER DECREMENTED'};

		case 'reset':
			return {...state,counter:0,message:'COUNTER RESET'};

		default:
			return state;
	}
};
export default function CounterReducer() {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<div>
			<h1>CounterReducer:: {state.counter} =============================================={state.message}</h1>
			<button onClick={() => dispatch({ type: 'increment' })}>INCREMENT</button>
			<button onClick={() => dispatch({ type: 'decrement' })}>DECREMENT</button>
			<button onClick={() => dispatch({ type: 'reset' })}>RESET</button>
		</div>
	);
}
