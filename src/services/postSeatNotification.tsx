import nomadAxios from '../utils/nomadAxios';

const postSeatNotifiaction = (location: string) => nomadAxios.post(`member/notification/iMac/${location}`);
export default postSeatNotifiaction;
