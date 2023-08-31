import nomadAxios from '../utils/nomadAxios';

const getMeeting = (cluster: string) => nomadAxios.get('/meetingRoom', { params: { cluster } });

export default getMeeting;
