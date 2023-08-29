import React from 'react';
import { mapBorder, leftTopBorder } from './MapStyle';
import DisableRoom from './DisableRoom';
import AbleRoom from './AbleRoom';

function C3Map() {
	return (
		<div id="MeetingMap" className="grid grid-cols-5 grid-rows-12 h-2/3 w-2/3 mt-5" css={mapBorder}>
			<div className="col-span-2 row-span-full" css={leftTopBorder}>
				<DisableRoom roomName="C3 Cluster" />
			</div>
			<div className="col-span-3">
				<DisableRoom roomName="사물함" />
			</div>
			<div className="col-span-3 row-span-2">
				<AbleRoom roomName="TABLE A" isAvailable noti />
			</div>
			<div className="col-span-3 row-span-3">
				<AbleRoom roomName="회의실 A" isAvailable={false} noti={false} />
			</div>
			<div className="col-span-3 row-span-3">
				<AbleRoom roomName="회의실 B" isAvailable noti={false} />
			</div>
			<div className="col-span-3 row-span-2">
				<AbleRoom roomName="TABLE B" isAvailable noti={false} />
			</div>
			<div className="col-span-3">
				<DisableRoom roomName="사물함" />
			</div>
		</div>
	);
}
export default C3Map;
