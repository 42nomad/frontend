import nomadAxios from '../utils/nomadAxios';

const postInCluster = () => nomadAxios.post('admin/inCluster');

export default postInCluster;
