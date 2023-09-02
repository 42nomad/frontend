import nomadAxios from '../utils/nomadAxios';
import formatDate from '../pages/Staff/logics/formatDate';

const getStatCluster = (startDate: Date, endDate: Date, cluster: number, sortingOption: number) =>
	nomadAxios.get('stat/cluster', {
		params: { startDate: formatDate(startDate), endDate: formatDate(endDate), cluster, sortingOption },
	});

export default getStatCluster;
