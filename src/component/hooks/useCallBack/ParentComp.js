import React, { useCallback, useState } from 'react';
import Title from './Title';
import Button from './Button';
import Count from './Count';

export default function ParentComp() {
	const [age, setage] = useState(0);
	const [salary, setsalary] = useState(0);

	const incrementAge = useCallback(() => {
		setage((prevAge) => prevAge + 1);
	}, [age]);

	const incrementSalary = useCallback(() => {
		setsalary((prevSalary) => prevSalary + 1000);
	}, [salary]);

	return (
		<div>
			<h1>INSIDE PARENT COMP</h1>
			<Title></Title>
			<Count names='age' val={age}></Count>
			<Button display='AGE' increment={incrementAge}></Button>
			<Count names='salary' val={salary}></Count>
			<Button display='Salary' increment={incrementSalary}></Button>
		</div>
	);
}
