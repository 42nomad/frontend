import React from 'react';
import { BellAlertIcon, BellSlashIcon } from '@heroicons/react/24/outline';
import { contentsCenter, ableRoom, occupiedRoom, bellIcon } from './MapStyle';

interface AbleRoomProps {
	roomName: string;
	isAvailable: boolean;
	noti: boolean;
}

function AbleRoom({ roomName, isAvailable, noti }: AbleRoomProps) {
	const [isNoti, setIsNoti] = React.useState<boolean>(noti);

	return (
		<div className="relative w-full h-full" css={[contentsCenter, isAvailable ? ableRoom : occupiedRoom]}>
			{isNoti ? (
				<BellAlertIcon
					css={bellIcon}
					className={isAvailable ? 'fill-nomad-green/50' : 'text-yellow-400'}
					onClick={() => {
						setIsNoti(false);
					}}
				/>
			) : (
				<BellSlashIcon
					css={bellIcon}
					onClick={() => {
						setIsNoti(true);
					}}
				/>
			)}
			{roomName}
			{isAvailable ? null : <div className="text-xs">2시간 45분 사용중</div>}
		</div>
	);
}

export default AbleRoom;
