import React, { useContext } from 'react';
import { userContext, loginContext } from './ComponentA';
export default function ComponentD() {
	const user = useContext(userContext);
	const login = useContext(loginContext);

	return (
		<div>
			<h1>ComponentD</h1> 
			  {Object.keys(user).map((key) =>{ 
              console.log(key,"   logging")
				return <option value={key}> user{key}</option>
             })}
			<h1>Login</h1>

			 {/* {Object.keys(login).map((key) => (
				<option value={key}>{login[key]}</option>
			))} */}
		</div>
	);
}
