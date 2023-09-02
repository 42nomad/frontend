import nomadAxios from '../utils/nomadAxios';

const getAdminLoginUrl = () => nomadAxios.get('admin/loginUrl');

export default getAdminLoginUrl;
