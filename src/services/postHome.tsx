import nomadAxios from "../utils/nomadAxios";

const postHome = (home: number) => nomadAxios.post(`member/home/${home}`);

export default postHome;