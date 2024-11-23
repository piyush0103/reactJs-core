import React, { useReducer } from 'react';
import ReducerCounte1 from './ReducerCounter1';

export const CountContext = React.createContext();
const initialState = { counter: 0, type: null, message: '' };
const reducer = (state, action) => {
	switch (action.type) {
		case 'increment':
			return {...state,counter:state.counter+1,message:'COUNTER INCREMENTED'};

		case 'decrement':
			return{...state,counter:state.counter-1,message:'COUNTER DECREMENTED'};

		case 'reset':
			return {...state,counter:0,message:'COUNTER RESET'};

		default:
			return state;
	}
};
export default function ReducerCounter0() {
	const [state, dispatch] = useReducer(reducer,initialState);

	return (
		<CountContext.Provider value={{countState:state,countDispatch:dispatch}}>
			<div>
				<h1>ReducerCounter MAIN COUNT ::{state.counter}</h1>
				<ReducerCounte1></ReducerCounte1>
			</div>
		</CountContext.Provider>
	);
}
