import React, { useMemo, useState } from 'react';

export default function CounterMemo() {
	const [counter1, setcounter1] = useState(0);
	const [counter2, setcounter2] = useState(0);

	const incrementOne = () => {
		setcounter1(counter1 + 1);
	};
	const incrementTwo = () => {
		setcounter2(counter2 + 1);
	};

	const isEven = useMemo(() => {
		let i = 0;
		while (i < 2000000000) {
			i++;
		}
		return counter1 % 2 == 0;
	}, [counter1]);
	return (
		<div>
			<h1>COunter1 :{counter1}</h1>
			<h1>COunter2 :{counter2}</h1>
			<h2> {isEven ? 'EVEN' : 'ODD'}</h2>
			<button onClick={incrementOne}>Increment1</button>
			<button onClick={incrementTwo}>Increment2</button>
		</div>
	);
}
