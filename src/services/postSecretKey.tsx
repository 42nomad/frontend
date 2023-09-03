import nomadAxios from '../utils/nomadAxios';

const postSecretKey = (secretKey: string) => nomadAxios.post(`admin/secret/${secretKey}`);

export default postSecretKey;
