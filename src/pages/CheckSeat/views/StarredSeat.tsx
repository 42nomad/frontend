import React, { useState } from 'react';
import { BellAlertIcon, BellSlashIcon } from '@heroicons/react/24/outline';
import seatBackground from '../logics/SeatBackground';
import StarredData from '../../../interfaces/StarredData';
import postSeatNotifiaction from '../../../services/postSeatNotification';
import SeatInfo from '../logics/SeatInfo';
import deleteNotification from '../../../services/deleteNotification';

function StarredSeat({ seat }: { seat: StarredData }) {
	const { location, isAvailable, cadet, elapsedTime } = seat;
	const [isNoti, setIsNoti] = useState<boolean>(seat.isNoti);
	const [notificationId, setNotificationId] = useState<number>(seat.notificationId);
	// async await이 필요한지 테스트해봐야함
	const setNotification = () => {
		if (isNoti) deleteNotification(notificationId);
		else {
			// 돌아왔을 때 notificationId가 새로 등록이 안되어서 오류가 남.
			// 백엔드에게 res.data에 넣어달라고 요청함.
			// 해주면 이대로 가면 되고,
			// 안될거같다고 하면 부모단에서 변경을 감지하고 리프레시해줘야함.
			postSeatNotifiaction(seat.location).then((res) => {
				setNotificationId(res.data.notificationId);
			});
		}
		setIsNoti(!isNoti);
	};

	return (
		<div
			id="Seat"
			className={`shadow-full shadow-zinc-900/10 rounded-3xl text-md w-5/6 pt-2.5 pl-5 pr-5 pb-2.5 text-black 
			${seatBackground(isAvailable, elapsedTime)}`}
		>
			<div className="flex justify-between items-center">
				<div>{location}</div>
				<button
					type="button"
					className="w-5 h-5"
					onClick={() => {
						setNotification();
					}}
				>
					{isNoti ? <BellAlertIcon className=" fill-yellow-400/50" /> : <BellSlashIcon />}
				</button>
			</div>
			<div className="font-nexonLight text-sm">{SeatInfo(isAvailable, cadet, elapsedTime)}</div>
		</div>
	);
}

export default StarredSeat;
