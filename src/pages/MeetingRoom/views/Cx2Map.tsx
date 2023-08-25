import React from 'react';

function Cx2Map() {
	return (
		<div
			id="MeetingMap"
			className="grid grid-cols-6 grid-rows-6 h-2/3 w-3/4 mt-5 divide-black divide-y-2 divide-x-2 border-black border-r-2 border-b-2"
		>
			<div className="col-span-1 row-span-1 flex items-center justify-center bg-meeting-disable text-nomad-sand border-black border-t-2 border-l-2">
				좌석
			</div>
			<div className="col-span-3 row-span-1 flex justify-center items-center bg-white text-black">다각형책상</div>
			<div className="col-span-1 row-span-1 flex items-center justify-center bg-meeting-disable text-nomad-sand">
				좌석
			</div>
			<div className="col-start-6 col-span-1 row-span-full flex justify-center items-center bg-meeting-disable text-nomad-sand">
				사물함
			</div>
			<div className="flex row-span-1 col-span-5 items-center justify-center bg-meeting-disable text-nomad-sand">
				Cx2 Cluster
			</div>
			<div className="flex col-span-5 row-span-2 items-center justify-center bg-white text-black">오아시스</div>
			<div className="flex row-span-1 col-span-5 items-center justify-center bg-meeting-disable text-nomad-sand">
				Cx2 Cluster
			</div>
			<div className="col-span-1 row-span-1 flex items-center justify-center bg-meeting-disable text-nomad-sand">
				좌석
			</div>
			<div className="col-span-3 flex justify-center items-center bg-white text-black">다각형책상</div>
			<div className="col-span-1 row-span-1 flex items-center justify-center bg-meeting-disable text-nomad-sand">
				좌석
			</div>
		</div>
	);
}

export default Cx2Map;
