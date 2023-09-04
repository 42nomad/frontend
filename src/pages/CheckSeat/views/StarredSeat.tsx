import React, { useState } from 'react';
import { BellAlertIcon, BellSlashIcon } from '@heroicons/react/24/outline';
import seatBackground from '../logics/seatBackground';
import StarredData from '../../../interfaces/StarredData';
import seatInfo from '../logics/seatInfo';
import { useAppDispatch } from '../../../store/hooks';
import setNotification from '../../../utils/setNotification';
import postSeatNotification from '../../../services/postSeatNotification';

function StarredSeat({ seat }: { seat: StarredData }) {
	const { location, isAvailable, cadet, elapsedTime } = seat;
	const [isNoti, setIsNoti] = useState<boolean>(seat.isNoti);
	const [notificationId, setNotificationId] = useState<number>(seat.notificationId);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const dispatch = useAppDispatch();

	return (
		<div
			id="Seat"
			className={`shadow-full shadow-zinc-900/10 rounded-3xl text-md w-5/6 pt-2.5 pl-5 pr-5 pb-2.5 text-black 
			${seatBackground(isAvailable, elapsedTime)}`}
		>
			<div className="flex justify-between items-center">
				<div>{location.toUpperCase()}</div>
				{isLoading && (
					<div className="w-5 h-5 rounded-full animate-spin border-4 border-solid border-nomad-green border-t-transparent bg-transparent" />
				)}
				{!isLoading && (
					<button
						type="button"
						className="w-5 h-5"
						onClick={() => {
							setNotification({
								isNoti: { state: isNoti, setState: setIsNoti },
								notificationId: { state: notificationId, setState: setNotificationId },
								isLoading: { state: isLoading, setState: setIsLoading },
								postNotification: postSeatNotification,
								location: seat.location,
								seat,
								dispatch,
								isDispatch: true,
							});
						}}
					>
						{isNoti ? <BellAlertIcon className=" fill-yellow-400/50" /> : <BellSlashIcon />}
					</button>
				)}
			</div>
			<div className="font-nexonLight text-sm">{seatInfo(isAvailable, cadet, elapsedTime)}</div>
		</div>
	);
}

export default StarredSeat;
