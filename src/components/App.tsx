import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login/views/Login';
import Main from '../pages/Main/views/Main';
import Lost from '../pages/Lost/views/Lost';
import LostForm from '../pages/Lost/views/LostForm';
import Cluster from '../pages/Cluster/views/Cluster';
import '../styles/App.css';

function App() {
	const { innerHeight } = window;
	document.documentElement.style.setProperty('--vh', `${innerHeight}px`);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/main" element={<Main />} />
				<Route path="/lost" element={<Lost />} />
				<Route path="/lost/*" element={<LostForm />} />
				<Route path="/cluster" element={<Cluster />} />
				<Route path="*" element={<div>Not Found</div>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
