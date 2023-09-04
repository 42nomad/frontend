import React, { useState } from 'react';
import MapNav from '../../../components/MapNav/views/MapNav';
import C3Map from './C3Map';
import C1Map from './C1Map';
import Cx2Map from './Cx2Map';
import C5Map from './C5Map';
import GetMapInfo from '../logics/GetMapInfo';
import Loading from '../../../components/Loading/Loading';

function MeetingRoom() {
	const [idx, setIdx] = useState(0);
	const clusters = ['C1', 'CX2', 'C3', 'C5'];
	const mapInfo = GetMapInfo(clusters[idx]);
	const meetingMaps = [
		<C1Map mapInfo={mapInfo} />,
		<Cx2Map mapInfo={mapInfo} />,
		<C3Map mapInfo={mapInfo} />,
		<C5Map mapInfo={mapInfo} />,
	];

	return (
		<>
			{mapInfo === null && <Loading />}
			{mapInfo && (
				<div className="bg-nomad-sand h-full flex-col flex items-center justify-center">
					<MapNav mapName={clusters[idx]} idx={idx} setIdx={setIdx} maxIdx={3} />
					{meetingMaps[idx]}
				</div>
			)}
		</>
	);
}

export default MeetingRoom;
