import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login/views/Login';
import Main from '../pages/Main/views/Main';
import CheckSeat from '../pages/CheckSeat/views/CheckSeat';
import '../styles/App.css';

function App() {
	const { innerHeight } = window;
	document.documentElement.style.setProperty('--vh', `${innerHeight}px`);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/checkseat" element={<CheckSeat />} />
				<Route path="/main" element={<Main />} />
				<Route path="*" element={<div>Not Found</div>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
