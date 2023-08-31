import { useEffect, useState } from 'react';
import RoomData from '../../../interfaces/RoomData';
import getMeeting from '../../../services/getMeeting';

function GetMapInfo(cluster: string) {
	const [mapInfo, setMapInfo] = useState<RoomData[]>([]);

	useEffect(() => {
		getMeeting(cluster).then((res) => {
			setMapInfo(res.data);
		});
	}, [cluster]);
	return mapInfo;
}

export default GetMapInfo;
