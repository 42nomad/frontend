import nomadAxios from "../utils/nomadAxios"

const getMember = () => nomadAxios.get('member');

export default getMember;