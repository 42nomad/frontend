import nomadAxios from '../utils/nomadAxios';

const getSearchSeatData = (location: string) => nomadAxios.get(`/member/search/${location}`);

export default getSearchSeatData;
