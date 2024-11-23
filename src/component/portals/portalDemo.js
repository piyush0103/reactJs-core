import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
function PortalDemo() {
	const [domReady, setdomReady] = useState(false);
	useEffect(() => {
		setdomReady(true);
	});

	const returns = domReady ? (
		ReactDOM.createPortal(
			<div>
				<h1>Portal-Ddemo</h1>
			</div>,
			document.getElementById('portal-root')
		)
	) : (
		<div>
			<h1>DOM NOT READY</h1>
		</div>
	);
	return returns;
}

export default PortalDemo;
