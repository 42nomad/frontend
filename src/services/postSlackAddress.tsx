import nomadAxios from '../utils/nomadAxios';

const postSlackAddress = (slackAddress: string) => nomadAxios.post('admin/slack', { slackAddress });

export default postSlackAddress;
