import React, { useState, useEffect } from 'react';
import { BellAlertIcon, BellSlashIcon } from '@heroicons/react/24/outline';
import { bellIcon } from './MapStyle';
import AbleRoomProps from '../../../interfaces/AbleRoomProps';
import OccupyInfo from '../logics/OccupyInfo';
import postMeetingNotification from '../../../services/postMeetingNotification';
import setNotification from '../../../utils/setNotification';

function AbleRoom({ mapInfo, cluster, roomName }: AbleRoomProps) {
	const roomInfo = mapInfo?.find((room) => room.location === roomName);
	const [isNoti, setIsNoti] = useState<boolean>(false);
	const [notificationId, setNotificationId] = useState<number>(0);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	useEffect(() => {
		if (roomInfo) {
			setIsNoti(roomInfo.isNoti);
			setNotificationId(roomInfo.notificationId);
		}
	}, [roomInfo]);
	if (!roomInfo) return null;
	const { isAvailable, usageTime } = roomInfo;

	return (
		<div
			className={`relative w-full h-full flex items-center justify-center ${
				isAvailable ? 'bg-white text-black' : 'flex-col bg-nomad-green text-nomad-sand'
			}`}
		>
			{isLoading && (
				<div
					className={`rounded-full animate-spin border-4 border-solid ${
						isAvailable ? 'border-nomad-green' : 'border-white'
					} border-t-transparent bg-transparent`}
					css={bellIcon}
				/>
			)}
			{!isLoading && isNoti && (
				<BellAlertIcon
					css={bellIcon}
					className={isAvailable ? 'fill-yellow-400/50' : 'text-yellow-400'}
					onClick={() => {
						setNotification({
							isNoti: { state: isNoti, setState: setIsNoti },
							notificationId: { state: notificationId, setState: setNotificationId },
							isLoading: { state: isLoading, setState: setIsLoading },
							postNotification: postMeetingNotification,
							location: `${cluster}/${roomName}`,
							seat: null,
							dispatch: null,
							isDispatch: false,
						});
					}}
				/>
			)}
			{!isLoading && !isNoti && (
				<BellSlashIcon
					css={bellIcon}
					onClick={() => {
						setNotification({
							isNoti: { state: isNoti, setState: setIsNoti },
							notificationId: { state: notificationId, setState: setNotificationId },
							isLoading: { state: isLoading, setState: setIsLoading },
							postNotification: postMeetingNotification,
							location: `${cluster}/${roomName}`,
							seat: null,
							dispatch: null,
							isDispatch: false,
						});
					}}
				/>
			)}
			{roomName}
			{!isAvailable && <div className="text-xs">{OccupyInfo(usageTime)} 사용중</div>}
		</div>
	);
}

export default AbleRoom;
