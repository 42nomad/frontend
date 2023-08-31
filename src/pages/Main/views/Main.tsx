import React from 'react';
import { useNavigate } from 'react-router-dom';
import getHome from '../../../services/getHome';
import Header from '../../../components/Header/Header';

function Main() {
	const nav = useNavigate();
	getHome().then((res) => {
		if (res.data === 1) nav('/cluster');
		else if (res.data === 2) nav('/meeting');
		else if (res.data === 3) nav('/lost');
		else nav('/seat');
	});
	return (
		<>
			<Header />
			<div className="bg-nomad-sand h-full flex flex-col justify-center items-center" />
		</>
	);
}

export default Main;
