import nomadAxios from '../utils/nomadAxios';

const postAdminRole = (intra: string, role: number) =>
	nomadAxios.post('admin/role', null, { params: { intra: { intra }, role: { role } } });

export default postAdminRole;
