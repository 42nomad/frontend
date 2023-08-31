import nomadAxios from '../utils/nomadAxios';

const postMeetingNotification = (cluster: string, roomName: string) =>
	nomadAxios.post(`member/notification/meetingRoom/${roomName}/${cluster}`);

export default postMeetingNotification;
