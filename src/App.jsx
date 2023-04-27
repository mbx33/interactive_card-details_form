import { useState } from 'react';
import './App.css';

import LeftSide from './LeftSide';
import RightSide from './RightSide';

function App() {
	
	return (
		<>
			<main className="main">
				<div className="left-side">
					<LeftSide />
				</div>
				<div className="right-side">
					<RightSide />
				</div>
			</main>
		</>
	);
}

export default App;
