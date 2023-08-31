import React from 'react';
import { mapBorder, leftTopBorder } from './MapStyle';
import DisableRoom from './DisableRoom';
import AbleRoom from './AbleRoom';
import GetMapInfo from '../logics/GetMapInfo';

function C5Map() {
	const mapInfo = GetMapInfo('C5');

	return (
		<div id="MeetingMap" className="grid grid-cols-3 grid-rows-10 h-2/3 w-2/3 mt-5" css={mapBorder}>
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
