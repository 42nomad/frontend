import nomadAxios from '../utils/nomadAxios';

const getAdminRole = () => nomadAxios.get('admin/role');

export default getAdminRole;
