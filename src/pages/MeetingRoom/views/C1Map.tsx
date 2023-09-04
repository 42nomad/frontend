import React from 'react';
import { mapBorder, leftTopBorder } from './MapStyle';
import DisableRoom from './DisableRoom';
import AbleRoom from './AbleRoom';
import GetMapInfo from '../logics/GetMapInfo';
import Loading from '../../../components/Loading/Loading';

function C1Map() {
	const mapInfo = GetMapInfo('C1');

	return (
		<>
			{mapInfo === null && <Loading />}
			{mapInfo && (
				<div id="MeetingMap" className="grid grid-cols-6 grid-rows-12 h-2/3 w-3/4 mt-5" css={mapBorder}>
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
						<AbleRoom mapInfo={mapInfo} cluster="C1" roomName="TABLE A" />
					</div>
					<div className="col-start-1 col-end-3 row-span-2">
						<AbleRoom mapInfo={mapInfo} cluster="C1" roomName="TABLE B" />
					</div>
					<div className="col-start-4 col-span-3 row-start-2 row-span-2">
						<AbleRoom mapInfo={mapInfo} cluster="C1" roomName="TABLE C" />
					</div>
					<div className="col-span-3 row-span-3">
						<AbleRoom mapInfo={mapInfo} cluster="C1" roomName="회의실 A" />
					</div>
					<div className="col-start-1 col-end-3 row-[span_7_/_span_7]">
						<DisableRoom roomName="C1 Cluster" />
					</div>
					<div className="col-span-3 row-span-3">
						<AbleRoom mapInfo={mapInfo} cluster="C1" roomName="회의실 B" />
					</div>
					<div className="col-span-3 row-span-2">
						<AbleRoom mapInfo={mapInfo} cluster="C1" roomName="TABLE D" />
					</div>
					<div className="col-span-3">
						<DisableRoom roomName="사물함" />
					</div>
				</div>
			)}
		</>
	);
}
export default C1Map;
