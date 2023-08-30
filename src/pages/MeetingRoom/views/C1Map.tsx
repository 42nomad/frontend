import React from 'react';
import { contentsCenter, mapBorder, leftTopBorder, disableRoom, ableRoom, occupiedRoom } from './MapStyle';

const isAvailable = true;

function C1Map() {
	return (
		<div id="MeetingMap" className="grid grid-cols-6 grid-rows-12 h-2/3 w-2/3 mt-5" css={mapBorder}>
			<div className="col-span-2 row-span-1" css={[leftTopBorder, contentsCenter, disableRoom]}>
				사물함
			</div>
			<div className="col-start-3 col-span-1 row-span-full" css={[contentsCenter, disableRoom]}>
				복도
			</div>
			<div className="col-span-3 row-span-1" css={[contentsCenter, disableRoom]}>
				사물함
			</div>
			<div className="col-start-1 col-end-3 row-span-2" css={[contentsCenter, isAvailable ? ableRoom : occupiedRoom]}>
				TABLE
			</div>
			<div className="col-start-1 col-end-3 row-span-2" css={[contentsCenter, ableRoom]}>
				TABLE
			</div>
			<div className="col-start-4 col-span-3 row-start-2 row-span-2" css={[contentsCenter, ableRoom]}>
				TABLE
			</div>
			<div className="col-span-3 row-span-3" css={[contentsCenter, occupiedRoom]}>
				Room A<div className="text-sm">2시간 45분 사용중</div>
			</div>
			<div className="col-start-1 col-end-3 row-span-7" css={[contentsCenter, disableRoom]}>
				C1 Cluster
			</div>
			<div className="col-span-3 row-span-3" css={[contentsCenter, ableRoom]}>
				Room B
			</div>
			<div className="col-span-3 row-span-2" css={[contentsCenter, ableRoom]}>
				TABLE
			</div>
			<div className="col-span-3" css={[contentsCenter, disableRoom]}>
				사물함
			</div>
		</div>
	);
}
export default C1Map;
