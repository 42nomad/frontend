import nomadAxios from '../utils/nomadAxios';

const postMeetingNotification = (location: string) => nomadAxios.post(`member/notification/meetingRoom/${location}`);

export default postMeetingNotification;
