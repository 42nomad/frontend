import React from 'react';
import { mapBorder, leftTopBorder } from './MapStyle';
import DisableRoom from './DisableRoom';
import AbleRoom from './AbleRoom';
import RoomData from '../../../interfaces/RoomData';

function C5Map({ mapInfo }: { mapInfo: null | RoomData[] }) {
	return (
		<div
			id="MeetingMap"
			className="grid grid-cols-3 grid-rows-[repeat(10,_minmax(0,_1fr))] h-2/3 w-3/4 mt-5"
			css={mapBorder}
		>
			<div className="col-span-1 row-span-full" css={leftTopBorder}>
				<DisableRoom roomName="C5 Cluster" />
			</div>
			<div className="col-span-2">
				<DisableRoom roomName="사물함" />
			</div>
			<div className="col-span-2 row-span-5">
				<DisableRoom roomName="사물함" />
			</div>
			<div className="col-span-2 row-span-3">
				<AbleRoom mapInfo={mapInfo} cluster="C5" roomName="TABLE" />
			</div>
			<div className="col-span-2">
				<DisableRoom roomName="사물함" />
			</div>
		</div>
	);
}
export default C5Map;
