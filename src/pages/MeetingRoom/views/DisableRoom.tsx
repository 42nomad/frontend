import React from 'react';
import { contentsCenter } from './MapStyle';

function DisableRoom({ roomName }: { roomName: string }) {
	return (
		<div className="text-sm w-full h-full bg-meeting-disable text-nomad-sand" css={[contentsCenter]}>
			{roomName}
		</div>
	);
}
export default DisableRoom;
