import React, { useEffect, useState } from 'react';
// component didupdate mimick
export default function UseeffectAftrRender() {
	const [count, setcount] = useState(0);
	const [name, setname] = useState('');
	useEffect(() => {
		document.title = `he clicked this many times ${count}`;
		console.log(' runs unconditionally after every update');

		//   return () => {
		//     second
		//   }
	},[count]);

	const handleClick = () => {
		setcount((prevState) => {
			console.log('printing prev ', prevState);
			return prevState + 1;
		});

		// setcount(prevState=>prevState+1)
	};
	const handleInputChange = (e) => {
		setname(e.target.value);
	};

	return (
		<div>
			<div>
				<label htmlFor='NAME'></label>
				<input type='text' value={name} onChange={handleInputChange} />
			</div>
			<button onClick={handleClick}>Title Update</button>
		</div>
	);
}
