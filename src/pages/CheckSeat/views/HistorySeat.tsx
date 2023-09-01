import React from 'react';
import seatBackground from '../logics/seatBackground';
import HistoryData from '../../../interfaces/HistoryData';
import seatInfo from '../logics/seatInfo';

function HistorySeat({ seat }: { seat: HistoryData }) {
	const { location, isAvailable, cadet, elapsedTime, usedTime } = seat;

	return (
		<div
			id="Seat"
			className={`shadow-full shadow-zinc-900/10 rounded-3xl text-md w-5/6 pt-2.5 pl-5 pr-5 pb-2.5 text-black 
			${seatBackground(isAvailable, elapsedTime)}`}
		>
			<div className="flex flex-row items-center space-x-3">
				<div>{location}</div>
				<div className="font-nexonLight text-xs text-gray-500">{usedTime} 전</div>
			</div>
			<div className="font-nexonLight text-sm">{seatInfo(isAvailable, cadet, elapsedTime)}</div>
		</div>
	);
}

export default HistorySeat;
