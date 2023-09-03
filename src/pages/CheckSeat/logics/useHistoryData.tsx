import { useEffect, useState } from 'react';
import HistoryData from '../../../interfaces/HistoryData';
import getHistory from '../../../services/getHistory';

function useHistoryData() {
	const [History, setHistory] = useState<HistoryData[]>([]);
	useEffect(() => {
		getHistory().then((res) => {
			setHistory(res.data);
		});
	}, []);
	return History;
}

export default useHistoryData;
