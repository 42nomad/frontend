import React from 'react';

function C5Map() {
	return (
		<div
			id="MeetingMap"
			className="grid grid-cols-3 grid-rows-10 h-2/3 w-2/3 mt-5 divide-black border-black divide-y-2 divide-x-2 border-r-2 border-b-2"
		>
			<div className="col-span-1 row-span-full flex items-center justify-center bg-meeting-disable text-nomad-sand border-black border-t-2 border-l-2">
				C5 Cluster
			</div>
			<div className="col-span-2 flex justify-center items-center bg-meeting-disable text-nomad-sand">사물함</div>
			<div className="col-span-2 row-span-5 flex flex-col justify-center items-center bg-meeting-disable text-nomad-sand">
				좌식공간
			</div>
			<div className="col-span-2 row-span-3 flex justify-center bg-white text-black items-center">TABLE</div>
			<div className="col-span-2 flex justify-center items-center bg-meeting-disable text-nomad-sand">사물함</div>
		</div>
	);
}
export default C5Map;
