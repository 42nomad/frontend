import React, { useState } from 'react';
import { contentsCenter } from './MapStyle';
import MapNav from '../../../components/MapNav/MapNav';
import C3Map from './C3Map';
import C1Map from './C1Map';
import Cx2Map from './Cx2Map';
import C5Map from './C5Map';

const meetingLeftClick = (idx: number, setIdx: React.Dispatch<React.SetStateAction<number>>) => {
	if (idx === 0) setIdx(3);
	else setIdx(idx - 1);
};

const meetingRightClick = (idx: number, setIdx: React.Dispatch<React.SetStateAction<number>>) => {
	if (idx === 3) setIdx(0);
	else setIdx(idx + 1);
};

function MeetingRoom() {
	const [idx, setIdx] = useState(0);
	const clusters = ['C1', 'CX2', 'C3', 'C5'];
	const meetingMaps = [<C1Map />, <Cx2Map />, <C3Map />, <C5Map />];
	return (
		<div className="bg-nomad-sand h-full flex-col" css={contentsCenter}>
			<MapNav
				mapName={clusters[idx]}
				idx={idx}
				setState={setIdx}
				leftButtonClick={meetingLeftClick}
				rightButtonClick={meetingRightClick}
			/>
			{meetingMaps[idx]}
		</div>
	);
}

export default MeetingRoom;
