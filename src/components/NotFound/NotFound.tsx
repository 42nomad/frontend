import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
	return (
		<>
			<Link to="/main" className="w-full max-w-max-wid bg-nomad-green fixed">
				<div id="Logo" className="flex h-15 mt-4 ml-4 font-fugazRegular text-2xl text-nomad-sand cursor-pointer">
					42NOMAD
				</div>
			</Link>
			<div className="bg-nomad-green h-full flex flex-col justify-center items-center">
				<div className="text-4xl font-nexonBold text-nomad-sand">404 Not Found</div>
			</div>
		</>
	);
}

export default NotFound;
