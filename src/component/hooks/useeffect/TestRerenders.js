import React, { useEffect, useState } from 'react';
const person = { name: 'piyush', age: '21' };
const school = { name: 'KPS', location: 'Raipur' };
export default function TestRerenders(person,school) {
	const [count, setcount] = useState(0);

    const option = { person, school };


	useEffect(() => {
		// setInterval(() => {
		// 	console.log('USE EFFECT RENDERS', option);
		// }, 3000);
        			console.log('USE EFFECT RENDERS', option);
                    			setcount(count + 1);


	}, [person,school]);

	return (
		<div>
			TestRerenders
			<h2></h2>
			<h1>RENDER COUNT {count}</h1>
		</div>
	);
}
