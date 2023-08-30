import React from 'react';
import { contentsCenter } from './MapStyle';

interface DisableRoomProps {
	roomName: string;
}

function DisableRoom({ roomName }: DisableRoomProps) {
	return (
		<div className="text-sm w-full h-full bg-meeting-disable text-nomad-sand" css={[contentsCenter]}>
			{roomName}
		</div>
	);
}
export default DisableRoom;
