import React from 'react';

function DisableRoom({ roomName }: { roomName: string }) {
	return (
		<div className="flex items-center justify-center text-sm w-full h-full bg-meeting-disable text-nomad-sand">
			{roomName}
		</div>
	);
}
export default DisableRoom;
