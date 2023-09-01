import nomadAxios from '../utils/nomadAxios';

const deleteStarred = (id: number) => nomadAxios.delete(`member/favorite/${id}`);

export default deleteStarred;
