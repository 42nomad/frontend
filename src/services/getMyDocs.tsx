import nomadAxios from "../utils/nomadAxios";

const getMyDocs = () => nomadAxios.get('member/post');

export default getMyDocs;