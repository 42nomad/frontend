import nomadAxios from '../utils/nomadAxios';

const postAdminRole = (intra: string, role: number) => nomadAxios.post('admin/role', null, { params: { intra, role } });

export default postAdminRole;
