import { useEffect, useState } from 'react';
import RoomData from '../../../interfaces/RoomData';
import getMeeting from '../../../services/getMeeting';
import swalAlert from '../../../utils/swalAlert';

function GetMapInfo(cluster: string) {
	const [mapInfo, setMapInfo] = useState<RoomData[] | null>(null);

	useEffect(() => {
		getMeeting(cluster)
			.then((res) => {
				setMapInfo(res.data);
			})
			.catch((err) => {
				if (err.response.status === 404) swalAlert('회의실이 존재하지 않는 클러스터입니다');
			});
	}, [cluster]);
	return mapInfo;
}

export default GetMapInfo;
