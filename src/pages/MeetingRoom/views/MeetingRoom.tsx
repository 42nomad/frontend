import React, { useState } from 'react';
import Header from '../../../components/Header/Header';
import MapNav from '../../../components/MapNav/views/MapNav';
import C3Map from './C3Map';
import C1Map from './C1Map';
import Cx2Map from './Cx2Map';
import C5Map from './C5Map';

function MeetingRoom() {
	const [idx, setIdx] = useState(0);
	const clusters = ['C1', 'CX2', 'C3', 'C5'];
	const meetingMaps = [<C1Map />, <Cx2Map />, <C3Map />, <C5Map />];
	return (
		<>
			<Header />
			<div className="bg-nomad-sand h-full flex-col flex items-center justify-center">
				<MapNav mapName={clusters[idx]} idx={idx} setIdx={setIdx} maxIdx={3} />
				{meetingMaps[idx]}
			</div>
		</>
	);
}

export default MeetingRoom;
