import React from 'react';
import { contentsCenter } from './MapStyle';
import MapNav from '../../../components/MapNav/views/MapNav';
import SideBar from '../../../components/SideBar/views/SideBar';
import C3Map from './C3Map';

function MeetingRoom() {
	return (
		<>
			<SideBar />
			<div className="bg-nomad-sand h-full flex-col" css={contentsCenter}>
				<MapNav />
				<C3Map />
			</div>
		</>
	);
}

export default MeetingRoom;
