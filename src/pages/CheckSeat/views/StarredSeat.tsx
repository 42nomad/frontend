import React, { useState } from 'react';
import { BellAlertIcon, BellSlashIcon } from '@heroicons/react/24/outline';
import seatBackground from '../logics/SeatBackground';
import StarredData from '../../../interfaces/StarredData';
import postSeatNotifiaction from '../../../services/postSeatNotification';
import SeatInfo from '../logics/SeatInfo';
import deleteNotification from '../../../services/deleteNotification';
import swalAlert from '../../../utils/swalAlert';

function StarredSeat({ seat }: { seat: StarredData }) {
	const { location, isAvailable, cadet, elapsedTime } = seat;
	const [isNoti, setIsNoti] = useState<boolean>(seat.isNoti);
	const [notificationId, setNotificationId] = useState<number>(seat.notificationId);
	// async await이 필요한지 테스트해봐야함
	const setNotification = () => {
		if (isNoti) deleteNotification(notificationId);
		else {
			postSeatNotifiaction(seat.location)
				.then((res) => {
					setNotificationId(res.data);
				})
				.catch((error) => {
					if (error.response.status === 409) {
						swalAlert('이미 알림등록된 자리입니다');
					} else if (error.response.status === 404) {
						swalAlert('존재하지 않는 자리입니다');
					}
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
