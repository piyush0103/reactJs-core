import React from 'react';

export default function CounterInner({ mprops,counteValue }) {
	return (
		<div>
			<h1>CounterInner</h1>
			<button onClick={mprops}>CounterInnerIncrement : {counteValue}</button>
		</div>
	);
}
