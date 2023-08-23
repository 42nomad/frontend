import React from 'react';
import MapNav from '../../../components/MapNav/views/MapNav';
import SideBar from '../../../components/SideBar/SideBar';
import C1Map from './C1Map';

function MeetingRoom() {
	return (
		<>
			<SideBar />
			<div className="bg-nomad-sand h-full flex flex-col justify-center items-center">
				<MapNav />
				<C1Map />
			</div>
		</>
	);
}

export default MeetingRoom;
