import nomadAxios from '../utils/nomadAxios';
import formatDate from '../pages/Stat/logics/formatDate';

const getStatCluster = (startDate: Date, endDate: Date, cluster: string, sortingOption: number) =>
	nomadAxios.get('stat/cluster', {
		params: { startDate: formatDate(startDate), endDate: formatDate(endDate), cluster, sort: sortingOption },
	});

export default getStatCluster;
