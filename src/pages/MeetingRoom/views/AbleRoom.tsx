import React, { useState } from 'react';
import { BellAlertIcon, BellSlashIcon } from '@heroicons/react/24/outline';
import { contentsCenter, ableRoom, occupiedRoom, bellIcon } from './MapStyle';
import AbleRoomProps from '../../../interfaces/AbleRoomProps';
import OccupyInfo from '../logics/OccupyInfo';
import postMeetingNotification from '../../../services/postMeetingNotification';
import deleteNotification from '../../../services/deleteNotification';
import swalAlert from '../../../utils/swalAlert';

function AbleRoom({ mapInfo, cluster, roomName }: AbleRoomProps) {
	const roomInfo = mapInfo?.find((room) => room.location === roomName);
	const [isNoti, setIsNoti] = useState<boolean>(false);
	const [notificationId, setNotificationId] = useState<number>(0);

	if (!roomInfo) return null;
	setIsNoti(roomInfo.isNoti);
	setNotificationId(roomInfo.notificationId);
	const { isAvailable, usageTime } = roomInfo;
	const setNotification = () => {
		if (isNoti) deleteNotification(notificationId);
		else {
			postMeetingNotification(cluster, roomName)
				.then((res) => {
					setNotificationId(res.data.notificationId);
				})
				.catch(() => {
					swalAlert('이미 알림등록된 회의실입니다');
				});
		}
		setIsNoti(!isNoti);
	};

	return (
		<div className="relative w-full h-full" css={[contentsCenter, isAvailable ? ableRoom : occupiedRoom]}>
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
