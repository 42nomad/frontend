import { useEffect, useState } from 'react';
import StarredData from '../../../interfaces/StarredData';
import getStarred from '../../../services/getStarred';

function GetStarredData() {
	const [starred, setStarred] = useState<StarredData[]>([]);
	useEffect(() => {
		getStarred().then((res) => {
			setStarred(res.data);
		});
	});
	return starred;
}

export default GetStarredData;
