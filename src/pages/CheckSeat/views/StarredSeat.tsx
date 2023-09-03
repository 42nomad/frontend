import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { BellAlertIcon, BellSlashIcon } from '@heroicons/react/24/outline';
import seatBackground from '../logics/seatBackground';
import StarredData from '../../../interfaces/StarredData';
import postSeatNotifiaction from '../../../services/postSeatNotification';
import seatInfo from '../logics/seatInfo';
import deleteNotification from '../../../services/deleteNotification';
import swalAlert from '../../../utils/swalAlert';
import { useAppDispatch } from '../../../store/hooks';
import { updateStarred } from '../../../store/starredReducer';

function StarredSeat({ seat }: { seat: StarredData }) {
	const { location, isAvailable, cadet, elapsedTime } = seat;
	const [isNoti, setIsNoti] = useState<boolean>(seat.isNoti);
	const [notificationId, setNotificationId] = useState<number>(seat.notificationId);
	const dispatch = useAppDispatch();

	const setNotification = () => {
		if (isNoti) {
			deleteNotification(notificationId);
			setNotificationId(0);
			dispatch(updateStarred({ ...seat, isNoti: false, notificationId: 0 }));
		} else {
			postSeatNotifiaction(seat.location)
				.then((res) => {
					setNotificationId(res.data);
					dispatch(updateStarred({ ...seat, isNoti: true, notificationId: res.data }));
				})
				.catch((error) => {
					if (error.response.status === 409) {
						swalAlert('이미 알림등록된 자리입니다');
					} else if (error.response.status === 404) {
						// notificationId업데이트해줘야함
						if (error.response.data.responseMsg === '슬랙 가입 정보 없음')
							Swal.fire({
								title: "<div style='font-size:30px'>슬랙 가입을 위해 <br>42intra에 연결된 이메일을 확인해주세요.</div>",
								heightAuto: false,
								confirmButtonColor: '#20633F',
								confirmButtonText: '확인',
							});
						else swalAlert('존재하지 않는 자리입니다');
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
				<div>{location.toUpperCase()}</div>
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
			<div className="font-nexonLight text-sm">{seatInfo(isAvailable, cadet, elapsedTime)}</div>
		</div>
	);
}

export default StarredSeat;
