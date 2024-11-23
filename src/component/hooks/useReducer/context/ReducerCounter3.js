import React, { useContext } from 'react';
import { CountContext } from './ReducerCounter0';

export default function ReducerCounter3() {
  const counterContext=useContext(CountContext)
  console.log(counterContext,'heyyyyy')
	return <div>

    <h1>ReducerCounter3</h1>
    <button onClick={() => counterContext.countDispatch({ type: 'increment' })}>INCREMENT</button>
			<button onClick={() => counterContext.countDispatch({ type: 'decrement' })}>DECREMENT</button>
			<button onClick={() => counterContext.countDispatch({ type: 'reset' })}>RESET</button>  </div>;
}
