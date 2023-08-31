import nomadAxios from '../utils/nomadAxios';

const postMeetingNotification = (cluster: string, roomName: string) =>
	nomadAxios.post(`member/notification/meetingRoom/${cluster}/${roomName}`);

export default postMeetingNotification;