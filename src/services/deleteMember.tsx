import nomadAxios from '../utils/nomadAxios';

const deleteMember = (member: string) => nomadAxios.delete(`admin/member/${member}`);

export default deleteMember;
