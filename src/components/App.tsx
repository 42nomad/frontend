import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login/views/Login';
import SetToken from '../pages/Login/logics/SetToken';
import Lost from '../pages/Lost/views/Lost';
import LostForm from '../pages/Lost/views/LostForm';
import Cluster from '../pages/Cluster/views/Cluster';
import CheckSeat from '../pages/CheckSeat/views/CheckSeat';
import MyPage from '../pages/MyPage/views/MyPage';
import MeetingRoom from '../pages/MeetingRoom/views/MeetingRoom';
import '../styles/App.css';
import Staff from '../pages/Admin/views/Staff';
import NotFound from './NotFound/NotFound';

const handleResize = () => {
	document.documentElement.style.setProperty('--vh', `${window.innerHeight}px`);
}

function App() {
	useEffect(() => {
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		}
	}, []);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/token" element={<SetToken />} />
				<Route path="/mypage" element={<MyPage />} />
				<Route path="/seat" element={<CheckSeat />} />
				<Route path="/meeting" element={<MeetingRoom />} />
				<Route path="/lost" element={<Lost />} />
				<Route path="/lost/*" element={<LostForm />} />
				<Route path="/cluster" element={<Cluster />} />
				<Route path="/staff" element={<Staff />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
