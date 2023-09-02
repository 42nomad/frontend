import nomadAxios from '../utils/nomadAxios';
import formatDate from '../pages/Admin/logics/formatDate';

const getStatMeeting = (startDate: Date, endDate: Date, sortingOption: number) =>
	nomadAxios.get('static/meetingRoom', {
		params: { startDate: formatDate(startDate), endDate: formatDate(endDate), sortingOption },
	});

export default getStatMeeting;
