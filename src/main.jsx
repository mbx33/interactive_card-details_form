import React from 'react';
import ReactDOM from 'react-dom/client';
import { NumbersProvider } from '../contexts/NumbersContext';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<NumbersProvider>
			<App />
		</NumbersProvider>
	</React.StrictMode>
);
