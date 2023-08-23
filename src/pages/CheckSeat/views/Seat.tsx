import React from 'react';

interface SeatProps {
	seatLocation: string;
	seatStatus: string;
	seatUser?: string;
	logoutTime?: number;
	isStarred: boolean;
	useDay?: number;
}

function Seat({ seatLocation, seatStatus, seatUser, logoutTime, isStarred, useDay }: SeatProps) {
	let isAvailable = false;
	if (seatStatus === '사용 가능' || seatStatus === '로그아웃') isAvailable = true;
	let seatState = '';
	if (!isAvailable) seatState = `${seatUser}님이 자리를 사용중입니다`;
	else if (logoutTime !== -1) seatState = `${logoutTime}분 전 ${seatStatus}`;
	else seatState = `${seatStatus}한 자리입니다`;

	return (
		<div
			id="Seat"
			className={`shadow-full shadow-zinc-900/10 rounded-3xl text-md w-5/6 pt-2.5 pl-5 pr-5 pb-2.5 text-black
				${isAvailable ? 'bg-white' : 'bg-zinc-100 '}`}
		>
			{!isStarred ? (
				<div className="grid grid-cols-4 items-center">
					<div>{seatLocation}</div>
					<div className="col-start-2 col-end-3 font-nexonLight text-xs text-gray-500">{useDay}일 전</div>
				</div>
			) : (
				<div>{seatLocation}</div>
			)}
			<div className="font-nexonLight text-sm">{seatState}</div>
		</div>
	);
}

Seat.defaultProps = {
	seatUser: '',
	logoutTime: -1,
	useDay: -1,
};

export default Seat;
