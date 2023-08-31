import React from 'react';
import { mapBorder, leftTopBorder } from './MapStyle';
import DisableRoom from './DisableRoom';
import AbleRoom from './AbleRoom';

function Cx2Map() {
	return (
		<div id="MeetingMap" className="grid grid-cols-6 grid-rows-6 h-2/3 w-3/4 mt-5" css={mapBorder}>
			<div className="col-span-1 row-span-1" css={leftTopBorder}>
				<DisableRoom roomName="좌석" />
			</div>
			<div className="col-span-3 row-span-1">
				<AbleRoom roomName="다각형 책상 A" isAvailable noti={false} />
			</div>
			<div className="col-span-1 row-span-1">
				<DisableRoom roomName="좌석" />
			</div>
			<div className="col-start-6 col-span-1 row-span-full">
				<DisableRoom roomName="사물함" />
			</div>
			<div className="row-span-1 col-span-5">
				<DisableRoom roomName="Cx2 Cluster" />
			</div>
			<div className="col-span-5 row-span-2">
				<AbleRoom roomName="오아시스" isAvailable={false} noti={false} />
			</div>
			<div className="row-span-1 col-span-5">
				<DisableRoom roomName="Cx2 Cluster" />
			</div>
			<div className="col-span-1 row-span-1">
				<DisableRoom roomName="좌석" />
			</div>
			<div className="col-span-3">
				<AbleRoom roomName="다각형 책상 B" isAvailable noti={false} />
			</div>
			<div className="col-span-1 row-span-1">
				<DisableRoom roomName="좌석" />
			</div>
		</div>
	);
}

export default Cx2Map;
