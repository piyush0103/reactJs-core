import React, { useEffect, useState } from 'react';
import axios from 'axios';
export default function SetStateArray() {
	const [names, setnames] = useState([]);
    const [items, setitems] = useState([])
	useEffect(() => {
        document.title=`You clicked this many times ${items.length}`
		// axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
		// 	const data = response.data;
        //     console.log('printing response',response)
		// 	setnames({ data });
		// });

		
	},[items]);

    const handleAddItem=(e)=>{
        console.log(e,'here')
        setitems([...items,{id:items.length,value:(Math.random()*10+1)+" hello"}])
    }

	return (
		<div>
			<h1>Displayying Array states</h1>
			{names.length > 0 ? (
				names.map((name) => <h2 key={name.index}>{name.title}</h2>)
			) : (
				<h2>No Names Found</h2>
			)}

{items.length > 0 ? (
				items.map((name) => <h2 key={name.index}>{name.value}</h2>)
			) : (
				<h2>No Names Found</h2>
			)}
            < button onClick={handleAddItem}>AddItemToArray</button>
		</div>
	);
}
