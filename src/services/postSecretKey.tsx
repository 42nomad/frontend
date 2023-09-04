import nomadAxios from '../utils/nomadAxios';

const postSecretKey = (secretKey: string) => nomadAxios.post('admin/secret', { secret: secretKey });

export default postSecretKey;
