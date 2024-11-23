import React, { useContext } from 'react';
import ComponentB from './ComponentB';
export const userContext = React.createContext();
export const loginContext = React.createContext();

export default function ComponentA() {
	return (
		<div>
			<h1>ComponentA</h1>
			<userContext.Provider value={{ name: 'piyush', age: 25 }}>
				<loginContext.Provider value={{ token: 'piyush', age: 25 }}>
					<ComponentB></ComponentB>
				</loginContext.Provider>
			</userContext.Provider>
		</div>
	);
}
