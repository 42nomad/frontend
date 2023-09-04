import nomadAxios from '../utils/nomadAxios';

const getStatRole = () => nomadAxios.get('stat/role');

export default getStatRole;
