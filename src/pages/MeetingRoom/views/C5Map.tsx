import React from 'react';
import { contentsCenter, mapBorder, leftTopBorder, disableRoom, ableRoom } from './MapStyle';

function C5Map() {
	return (
		<div id="MeetingMap" className="grid grid-cols-3 grid-rows-10 h-2/3 w-2/3 mt-5" css={mapBorder}>
			<div className="col-span-1 row-span-full" css={[contentsCenter, leftTopBorder, disableRoom]}>
				C5 Cluster
			</div>
			<div className="col-span-2" css={[contentsCenter, disableRoom]}>
				사물함
			</div>
			<div className="col-span-2 row-span-5" css={[contentsCenter, disableRoom]}>
				좌식공간
			</div>
			<div className="col-span-2 row-span-3" css={[contentsCenter, ableRoom]}>
				TABLE
			</div>
			<div className="col-span-2" css={[contentsCenter, disableRoom]}>
				사물함
			</div>
		</div>
	);
}
export default C5Map;
