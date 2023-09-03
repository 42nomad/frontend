import nomadAxios from '../utils/nomadAxios';

const postStarred = (location: string) => nomadAxios.post(`/member/favorite/${location}`);

export default postStarred;
