import React, { useReducer } from 'react';
const initialState = 0;
const reducer = (state, action) => {
	switch (action) {
		case 'increment':
            return state+1

		case 'decrement':
            return state-1
		

		case 'reset':
			return 0

		default:
			return state;
	}
};
export default function CounterReducer() {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<div>
			<h1>CounterReducer::   {state}</h1>
			<button onClick={()=>dispatch('increment')}>INCREMENT</button>
			<button  onClick={()=>dispatch('decrement')}>DECREMENT</button>
			<button  onClick={()=>dispatch('reset')}>RESET</button>
		</div>
	);
}
