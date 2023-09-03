import nomadAxios from '../utils/nomadAxios';
import formatDate from '../pages/Stat/logics/formatDate';

const getStatClusterAll = (startDate: Date, endDate: Date, sortingOption: number) =>
	nomadAxios.get('stat/cluster/all', {
		params: { startDate: formatDate(startDate), endDate: formatDate(endDate), sort: sortingOption },
	});

export default getStatClusterAll;
