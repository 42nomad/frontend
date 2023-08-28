import React from 'react';

interface SeatProps {
	location: string;
	isAvailable: boolean;
	cadet: string | null;
	elapsedTime: number;
	usedTime?: string | null;
}

function Seat({ location, isAvailable, cadet, elapsedTime, usedTime }: SeatProps) {
	let seatinfo = '';
	let background = '';
	if (isAvailable === false) {
		seatinfo = `${cadet}님 사용중`;
		background = 'bg-zinc-200';
	} else if (elapsedTime !== -1) {
		seatinfo = `${elapsedTime}분 전 로그아웃`;
		background = 'bg-zinc-100';
	} else {
		seatinfo = '사용 가능';
		background = 'bg-white';
	}

	return (
		<div
			id="Seat"
			className={`shadow-full shadow-zinc-900/10 rounded-3xl text-md w-5/6 pt-2.5 pl-5 pr-5 pb-2.5 text-black ${background}`}
		>
			<div className="flex flex-row items-center space-x-3">
				<div>{location}</div>
				{usedTime === '' ? null : <div className="font-nexonLight text-xs text-gray-500">{usedTime} 전</div>}
			</div>
			<div className="font-nexonLight text-sm">{seatinfo}</div>
		</div>
	);
}

Seat.defaultProps = {
	usedTime: '',
};

export default Seat;
