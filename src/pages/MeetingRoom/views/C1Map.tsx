import React from 'react';

function C1Map() {
	return (
		<div
			id="MeetingMap"
			className="grid grid-cols-6 grid-rows-12 h-2/3 w-2/3 mt-5 divide-black divide-y-2 divide-x-2 border-black border-r-2 border-b-2"
		>
			<div className="col-span-2 row-span-1 flex justify-center items-center bg-meeting-disable text-nomad-sand border-black border-t-2 border-l-2">
				사물함
			</div>
			<div className="col-start-3 col-span-1 row-span-full flex justify-center items-center bg-meeting-disable text-nomad-sand">
				복도
			</div>
			<div className="col-span-3 row-span-1 flex justify-center items-center bg-meeting-disable text-nomad-sand">
				사물함
			</div>
			<div className="col-start-1 col-end-3 row-span-2 flex justify-center items-center bg-white text-black">TABLE</div>
			<div className="col-start-1 col-end-3 row-span-2 flex justify-center items-center bg-white text-black">TABLE</div>
			<div className="col-start-4 col-span-3 row-start-2 row-span-2 flex justify-center items-center bg-white text-black">
				TABLE
			</div>
			<div className="col-span-3 row-span-3 flex flex-col justify-center items-center bg-nomad-green text-nomad-sand">
				Room A<div className="text-sm">2시간 45분 사용중</div>
			</div>
			<div className="col-start-1 col-end-3 row-span-7 flex items-center justify-center bg-meeting-disable text-nomad-sand">
				C1 Cluster
			</div>
			<div className="col-span-3 row-span-3 flex justify-center bg-white text-black items-center">Room B</div>

			<div className="col-span-3 row-span-2 flex justify-center items-center bg-white text-black">TABLE</div>
			<div className="col-span-3 flex justify-center items-center bg-meeting-disable text-nomad-sand">사물함</div>
		</div>
	);
}
export default C1Map;
