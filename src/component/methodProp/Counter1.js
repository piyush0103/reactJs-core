import React, { useState } from 'react';
import CounterInner from './CounterInner';
import CounterInner2 from './CounterInner2';

export default function () {
	const [counter, setcounter] = useState(0);
	const handleCountChange = () => {
		setcounter((prevCounter) => prevCounter + 1);
	};
	return (
		<div>
			<h1>COunter=== {counter} </h1>
			<CounterInner mprops={handleCountChange} counteValue={counter}></CounterInner>
			<CounterInner2 mprops={handleCountChange}></CounterInner2>
		</div>
	);
}
