import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { BellAlertIcon, BellSlashIcon } from '@heroicons/react/24/outline';
import { contentsCenter, bellIcon } from './MapStyle';
import AbleRoomProps from '../../../interfaces/AbleRoomProps';
import OccupyInfo from '../logics/OccupyInfo';
import postMeetingNotification from '../../../services/postMeetingNotification';
import deleteNotification from '../../../services/deleteNotification';
import swalAlert from '../../../utils/swalAlert';

function AbleRoom({ mapInfo, cluster, roomName }: AbleRoomProps) {
	const roomInfo = mapInfo?.find((room) => room.location === roomName);
	const [isNoti, setIsNoti] = useState<boolean>(false);
	const [notificationId, setNotificationId] = useState<number>(0);

	useEffect(() => {
		if (roomInfo) {
			setIsNoti(roomInfo.isNoti);
			setNotificationId(roomInfo.notificationId);
		}
	}, [roomInfo]);
	if (!roomInfo) return null;
	const { isAvailable, usageTime } = roomInfo;
	const setNotification = () => {
		if (isNoti) {
			deleteNotification(notificationId);
			setNotificationId(0);
		} else {
			postMeetingNotification(cluster, roomName)
				.then((res) => {
					setNotificationId(res.data);
				})
				.catch((error) => {
					if (error.response.status === 404) {
						// notificationId업데이트해줘야함
						if (error.response.data.responseMsg === '슬랙 가입 정보 없음')
							Swal.fire({
								title: "<div style='font-size:30px'>슬랙 가입을 위해 <br>42intra에 연결된 이메일을 확인해주세요.</div>",
								heightAuto: false,
								confirmButtonColor: '#20633F',
								confirmButtonText: '확인',
							});
						else swalAlert('존재하지 않는 회의실입니다');
					} else if (error.response.status === 409) swalAlert('이미 알림등록된 회의실입니다');
				});
		}
		setIsNoti(!isNoti);
	};

	return (
		<div
			className={`relative w-full h-full ${
				isAvailable ? 'bg-white text-black' : 'flex-col bg-nomad-green text-nomad-sand'
			}`}
			css={[contentsCenter]}
		>
			{isNoti ? (
				<BellAlertIcon
					css={bellIcon}
					className={isAvailable ? 'fill-yellow-400/50' : 'text-yellow-400'}
					onClick={() => {
						setNotification();
					}}
				/>
			) : (
				<BellSlashIcon
					css={bellIcon}
					onClick={() => {
						setNotification();
					}}
				/>
			)}
			{roomName}
			{!isAvailable && <div className="text-xs">{OccupyInfo(usageTime)} 사용중</div>}
		</div>
	);
}

export default AbleRoom;
