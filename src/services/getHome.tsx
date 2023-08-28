import nomadAxios from "../utils/nomadAxios";

const getHome = () => nomadAxios.get('member/home');

export default getHome;