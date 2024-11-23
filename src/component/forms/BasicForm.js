import React, { useState } from 'react';
import './styles1.css';

export default function BasicForm() {
	let state = {
		email: 'email',
		password: 'password',
		language: 'Node',
	};
	const [formData, setFormData] = useState(state);
	const { email, password, language } = formData;
function handleFormChange(e){
let{name,value}=e.target
console.log('coming here baby ',name+"  ")
setFormData({[name]:value})

}

	return (
		<div>
			<h1>Form Basic</h1>
			<link
				href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css'
				rel='stylesheet'
				integrity='sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x'
				crossorigin='anonymous'
			/>
			<script
				src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js'
				integrity='sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4'
				crossorigin='anonymous'
			></script>

			<div className='bg'></div>

			<main className='form-signin'>
				<h1 className='h3'>Login</h1>

				<form action=''>
					<div className='form-floating'>
						<input
                        name="email"
							type='email'
							className='form-control'
							id='floatingInput'
							placeholder='name@example.com'
							required
							value={email}
                            onChange={handleFormChange}
						/>
						<label for='floatingInput'>Email address</label>
					</div>
					<div className='form-floating'>
						<input
                         name="password"
							type='password'
							className='form-control'
							id='floatingPassword'
							placeholder='Password'
							required
							value={password}
                            onChange={handleFormChange}
						/>
						<label for='floatingPassword'>Password</label>
					</div>
					<div className='form-floating'>
						<select
                         name="language"
							className='form-control'
							id='floatingPassword'
							value={language}
                            onChange={handleFormChange}
						>
							<option>React</option>
							<option>Node</option>
							<option>Java</option>
						</select>
						<label for='TOPIC'>SELECT YOUR LANGUAGE</label>
					</div>

					<div className='checkbox mb-3'>
						<div className='form-check form-switch'>
							<input
								className='form-check-input'
								type='checkbox'
								value='1'
								name='remember_me'
								id='rememberMeSwitch'
							/>
							<label className='form-check-label' for='rememberMeSwitch'>
								{' '}
								Remember me
							</label>
						</div>
					</div>
					<button className='w-100 btn btn-lg' type='submit'>
						Sign in
					</button>
				</form>
				<p className='copyright'>&copy; 2021</p>
			</main>
		</div>
	);
}
