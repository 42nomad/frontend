import React from 'react';
import { mapBorder, leftTopBorder } from './MapStyle';
import DisableRoom from './DisableRoom';
import AbleRoom from './AbleRoom';

function C1Map() {
	return (
		<div id="MeetingMap" className="grid grid-cols-6 grid-rows-12 h-2/3 w-2/3 mt-5" css={mapBorder}>
			<div className="col-span-2 row-span-1" css={leftTopBorder}>
				<DisableRoom roomName="사물함" />
			</div>
			<div className="col-start-3 col-span-1 row-span-full">
				<DisableRoom roomName="복도" />
			</div>
			<div className="col-span-3 row-span-1">
				<DisableRoom roomName="사물함" />
			</div>
			<div className="col-start-1 col-end-3 row-span-2">
				<AbleRoom roomName="TABLE A" isAvailable noti={false} />
			</div>
			<div className="col-start-1 col-end-3 row-span-2">
				<AbleRoom roomName="TABLE B" isAvailable noti={false} />
			</div>
			<div className="col-start-4 col-span-3 row-start-2 row-span-2">
				<AbleRoom roomName="TABLE C" isAvailable noti={false} />
			</div>
			<div className="col-span-3 row-span-3">
				<AbleRoom roomName="회의실 A" isAvailable={false} noti={false} />
			</div>
			<div className="col-start-1 col-end-3 row-span-7">
				<DisableRoom roomName="C1 Cluster" />
			</div>
			<div className="col-span-3 row-span-3">
				<AbleRoom roomName="회의실 B" isAvailable noti />
			</div>
			<div className="col-span-3 row-span-2">
				<AbleRoom roomName="TABLE D" isAvailable noti={false} />
			</div>
			<div className="col-span-3">
				<DisableRoom roomName="사물함" />
			</div>
		</div>
	);
}
export default C1Map;
