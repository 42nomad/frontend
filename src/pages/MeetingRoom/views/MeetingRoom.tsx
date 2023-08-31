import React, { useState } from 'react';
import { contentsCenter } from './MapStyle';
import Header from '../../../components/Header/Header';
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
	const clusters = ['C1', 'Cx2', 'C3', 'C5'];
	return (
		<>
			<Header />
			<div className="bg-nomad-sand h-full flex-col" css={contentsCenter}>
				<MapNav
					mapName={clusters[idx]}
					idx={idx}
					setState={setIdx}
					leftButtonClick={meetingLeftClick}
					rightButtonClick={meetingRightClick}
				/>
				{idx === 0 && <C1Map />}
				{idx === 1 && <Cx2Map />}
				{idx === 2 && <C3Map />}
				{idx === 3 && <C5Map />}
			</div>
		</>
	);
}

export default MeetingRoom;
