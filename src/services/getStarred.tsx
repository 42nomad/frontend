import nomadAxios from '../utils/nomadAxios';

const getStarred = () => nomadAxios.get('member/favorite');

export default getStarred;
