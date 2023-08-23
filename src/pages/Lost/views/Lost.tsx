import React from 'react';
import LostDoc from './LostDoc';
import SideBar from '../../../components/SideBar/views/SideBar';

function Lost() {
	return (
		<>
			<SideBar />
			<div className="bg-nomad-sand min-h-full pt-9">
				<div className="grid grid-cols-2 gap-5 p-8 box-border">
					<LostDoc />
					<LostDoc />
					<LostDoc />
					<LostDoc />
					<LostDoc />
					<LostDoc />
				</div>
			</div>
		</>
	);
}

export default Lost;
