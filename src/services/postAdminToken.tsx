import nomadAxios from '../utils/nomadAxios';

const postAdminToken = (code: string) => nomadAxios.post('admin/token', null, { params: { code } });

export default postAdminToken;
