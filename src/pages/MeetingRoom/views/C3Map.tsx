import React from 'react';
import { contentsCenter, mapBorder, leftTopBorder, disableRoom, ableRoom, occupiedRoom } from './MapStyle';

function C3Map() {
	return (
		<div id="MeetingMap" className="grid grid-cols-5 grid-rows-12 h-2/3 w-2/3 mt-5" css={mapBorder}>
			<div className="col-span-2 row-span-full" css={[contentsCenter, disableRoom, leftTopBorder]}>
				C3 Cluster
			</div>
			<div className="col-span-3" css={[contentsCenter, disableRoom]}>
				사물함
			</div>
			<div className="col-span-3 row-span-2" css={[contentsCenter, ableRoom]}>
				TABLE
			</div>
			<div className="col-span-3 row-span-3" css={[contentsCenter, occupiedRoom]}>
				Room A<div className="text-sm">2시간 45분 사용중</div>
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
export default C3Map;
