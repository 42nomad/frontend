import nomadAxios from '../utils/nomadAxios';

const deleteNotification = (notificationId: number) => nomadAxios.delete(`member/notification/${notificationId}`);

export default deleteNotification;
