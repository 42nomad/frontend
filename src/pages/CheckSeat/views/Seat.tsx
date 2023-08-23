import React from 'react';

interface SeatProps {
	seatLocation: string;
	seatStatus: string;
	seatUser?: string;
	logoutTime?: number;
	isStar: boolean;
	useDay?: number;
}

function Seat({ seatLocation, seatStatus, seatUser, logoutTime, isStar, useDay }: SeatProps) {
	let isAvaliable = false;
	if (seatStatus === '자리 사용 가능' || seatStatus === '로그아웃') isAvaliable = true;
	return (
		<div
			id="Seat"
			className={
				isAvaliable
					? 'bg-nomad-green text-nomad-sand rounded-3xl text-md w-5/6 pt-2.5 pl-5 pr-5 pb-2.5'
					: 'bg-nomad-disable bg-opacity-50 text-gray-700 rounded-3xl text-md w-5/6 pt-2.5 pl-5 pr-5 pb-2.5 font-nexonLight'
			}
		>
			{!isStar ? (
				<div className="grid grid-cols-4">
					<div>{seatLocation}</div>
					<div className={`col-start-2 col-end-3 ${isAvaliable ? 'text-white' : ' text-black'}`}>{useDay}일 전</div>
				</div>
			) : (
				<div>{seatLocation}</div>
			)}
			{!isAvaliable && <div>{seatUser}님이 자리를 사용중입니다</div>}
			{isAvaliable && logoutTime !== -1 && (
				<div>
					{logoutTime}분 전 {seatStatus}
				</div>
			)}
			{isAvaliable && logoutTime === -1 && <div> {seatStatus} </div>}
		</div>
	);
}

Seat.defaultProps = {
	seatUser: '',
	logoutTime: -1,
	useDay: -1,
};

export default Seat;
