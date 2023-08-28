import React from 'react';
import { contentsCenter, mapBorder, leftTopBorder, disableRoom, ableRoom } from './MapStyle';

function Cx2Map() {
	return (
		<div id="MeetingMap" className="grid grid-cols-6 grid-rows-6 h-2/3 w-3/4 mt-5" css={mapBorder}>
			<div className="col-span-1 row-span-1" css={[contentsCenter, disableRoom, leftTopBorder]}>
				좌석
			</div>
			<div className="col-span-3 row-span-1" css={[contentsCenter, ableRoom]}>
				다각형책상
			</div>
			<div className="col-span-1 row-span-1" css={[contentsCenter, disableRoom]}>
				좌석
			</div>
			<div className="col-start-6 col-span-1 row-span-full" css={[contentsCenter, disableRoom]}>
				사물함
			</div>
			<div className="row-span-1 col-span-5" css={[contentsCenter, disableRoom]}>
				Cx2 Cluster
			</div>
			<div className="col-span-5 row-span-2" css={[contentsCenter, ableRoom]}>
				오아시스
			</div>
			<div className="row-span-1 col-span-5" css={[contentsCenter, disableRoom]}>
				Cx2 Cluster
			</div>
			<div className="col-span-1 row-span-1" css={[contentsCenter, disableRoom]}>
				좌석
			</div>
			<div className="col-span-3" css={[contentsCenter, ableRoom]}>
				다각형책상
			</div>
			<div className="col-span-1 row-span-1" css={[contentsCenter, disableRoom]}>
				좌석
			</div>
		</div>
	);
}

export default Cx2Map;
