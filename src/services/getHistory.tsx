import nomadAxios from '../utils/nomadAxios';

const getHistory = () => nomadAxios.get('member/history');

export default getHistory;
