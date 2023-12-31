import React from 'react';
import { mapBorder, leftTopBorder } from './MapStyle';
import DisableRoom from './DisableRoom';
import AbleRoom from './AbleRoom';
import RoomData from '../../../interfaces/RoomData';

function C3Map({ mapInfo }: { mapInfo: null | RoomData[] }) {
	return (
		<div
			id="MeetingMap"
			className="grid grid-cols-5 grid-rows-[repeat(12,_minmax(0,_1fr))] h-2/3 w-3/4 mt-5"
			css={mapBorder}
		>
			<div className="col-span-2 row-span-full" css={leftTopBorder}>
				<DisableRoom roomName="C3 Cluster" />
			</div>
			<div className="col-span-3">
				<DisableRoom roomName="사물함" />
			</div>
			<div className="col-span-3 row-span-2">
				<AbleRoom mapInfo={mapInfo} cluster="C3" roomName="TABLE A" />
			</div>
			<div className="col-span-3 row-span-3">
				<AbleRoom mapInfo={mapInfo} cluster="C3" roomName="회의실 A" />
			</div>
			<div className="col-span-3 row-span-3">
				<AbleRoom mapInfo={mapInfo} cluster="C3" roomName="회의실 B" />
			</div>
			<div className="col-span-3 row-span-2">
				<AbleRoom mapInfo={mapInfo} cluster="C3" roomName="TABLE B" />
			</div>
			<div className="col-span-3">
				<DisableRoom roomName="사물함" />
			</div>
		</div>
	);
}
export default C3Map;
