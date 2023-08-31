import React, { useState } from 'react';
import { BellAlertIcon, BellSlashIcon } from '@heroicons/react/24/outline';
import { contentsCenter, ableRoom, occupiedRoom, bellIcon } from './MapStyle';
import AbleRoomProps from '../../../interfaces/AbleRoomProps';
import OccupyInfo from '../logics/OccupyInfo';
import postMeetingNotification from '../../../services/postMeetingNotification';
import deleteNotification from '../../../services/deleteNotification';

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
			// 돌아왔을 때 notificationId가 새로 등록이 안되어서 오류가 남.
			// 백엔드에게 res.data에 넣어달라고 요청함.
			// 해주면 이대로 가면 되고,
			// 안될거같다고 하면 부모단에서 변경을 감지하고 리프레시해줘야함.
			postMeetingNotification(cluster, roomName).then((res) => {
				setNotificationId(res.data.notificationId);
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
