import React from 'react';
import Header from '../Header/Header';

function NotFound() {
	return (
		<>
			<Header />
			<div className="bg-nomad-sand h-full flex flex-col justify-center items-center">
				<div className="text-8xl font-nexonBold text-nomad-green">404</div>
				<div className='text-3xl font-nexonBold text-nomad-green mb-5'>Not Found</div>
				<div className='text-sm font-nexonLight'>요청하신 페이지를 찾을 수 없습니다.</div>
			</div>
		</>
	);
}

export default NotFound;
