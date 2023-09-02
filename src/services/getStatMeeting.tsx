import nomadAxios from '../utils/nomadAxios';
import formatDate from '../pages/Staff/logics/formatDate';

const getStatMeeting = (startDate: Date, endDate: Date, sortingOption: number) =>
	nomadAxios.get('stat/meetingRoom', {
		params: { startDate: formatDate(startDate), endDate: formatDate(endDate), sort: sortingOption },
	});

export default getStatMeeting;
