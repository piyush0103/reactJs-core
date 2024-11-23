import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function FetchWithUseEffect() {
	const [post, setpost] = useState([]);
	const [postId, setpostId] = useState("")
	const [postU, setpostU] = useState({});
	const handleInputChange=(e)=>{
		setpostId(e.target.value)
	}
	useEffect(() => {
		axios
			.get('https://jsonplaceholder.typicode.com/posts')
			.then((response) => {
				setpost(response.data);
				console.log('printing response  ', response.data);
			})
			.catch((err) => {
				console.log('some error caught  ', err);
			});

		//   return () => {
		//     second
		//   }
	},[]);
	useEffect(() => {
		axios
			.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
			.then((response) => {
				setpostU(response.data);
				console.log('printing response  ', response.data);
			})
			.catch((err) => {
				console.log('some error caught  ', err);
			});

		//   return () => {
		//     second
		//   }
	},[postId]);
	return (
		<div>
			<label htmlFor="NAMEID"></label><input type="text" value={postId} onChange={handleInputChange}></input>
			<h1>HEYYYYY {postU.title}</h1>
			{/* <ul>
				{post.length > 0 ? 
					post.map(p => {
                    return<li key={p.id}>{p.title}</li>}
				) : (
					<h1>No List found </h1>
				)}
			</ul> */}
		</div>
	);
}
